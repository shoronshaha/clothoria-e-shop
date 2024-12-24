const createOrder = async (req, res) => {
    try {
      const {
        userId,
        cartItems,
        addressInfo,
        orderStatus,
        paymentMethod,
        paymentStatus,
        totalAmount,
        orderDate,
        orderUpdateDate,
        paymentId,
        payerId,
        cartId,
      } = req.body;
  
      const create_payment_json = {
        intent: "sale",
        payer: {
          payment_method: "paypal",
        },
        redirect_urls: {
          return_url: "http://localhost:5173/shop/paypal-return",
          cancel_url: "http://localhost:5173/shop/paypal-cancel",
        },
        transactions: [
          {
            item_list: {
              items: cartItems.map((item) => ({
                name: item.title,
                sku: item.productId,
                price: item.price.toFixed(2),
                currency: "USD",
                quantity: item.quantity,
              })),
            },
            amount: {
              currency: "USD",
              total: totalAmount.toFixed(2),
            },
            description: "description",
          },
        ],
      };
      const capturePayment = async (req, res) => {
        try {
          const { paymentId, payerId, orderId } = req.body;
      
          let order = await Order.findById(orderId);
      
          if (!order) {
            return res.status(404).json({
              success: false,
              message: "Order can not be found",
            });
          }
      
          order.paymentStatus = "paid";
          order.orderStatus = "confirmed";
          order.paymentId = paymentId;
          order.payerId = payerId;
      
          for (let item of order.cartItems) {
            let product = await Product.findById(item.productId);
      
            if (!product) {
              return res.status(404).json({
                success: false,
                message: `Not enough stock for this product ${product.title}`,
              });
            }
      
            product.totalStock -= item.quantity;
      
            await product.save();
          }
      
          const getCartId = order.cartId;
          await Cart.findByIdAndDelete(getCartId);
      
          await order.save();
      
          res.status(200).json({
            success: true,
            message: "Order confirmed",
            data: order,
          });
        } catch (e) {
          console.log(e);
          res.status(500).json({
            success: false,
            message: "Some error occured!",
          });
        }
      };  
module.exports = { createOrder, capturePayment }
