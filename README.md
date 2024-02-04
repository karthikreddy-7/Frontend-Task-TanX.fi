## ShopKart (Frontend Assignment TanX.fi)

### Contact Details
- **Name:** B Karthik Reddy
- **Email:** basupallykarthikreddy@gmail.com
- **College Reg Number:** 20BEC0512
- **Phone Number:** +91 9063007185
- **Resume Link:** [Click Here](https://drive.google.com/file/d/16XL9C_z7bdRHhceEoXvtGdOVxl-JpceN/view?usp=drive_link)
- **Portfolio Link:** [Click Here](https://karthikreddy1.com/)


## Overview
ShopKart is a Frontend web app build using ReactJS as an Assignment for Tanx.fi. 
### Deployed site without Internal JSON Server is https://tanxfifrontend.vercel.app/

### Total Tech Stack Used:
- ReactJS
- TailwindCSS
- DaisyUI (a tailwindCSS library for easy components styling)
- HTML
- Internal JSON server using npm runserver
- React Hooks and React Redux for state management

### Features Of  ShopKart:
- SignIn/Signup functionality
- Navigation from Home - Products - single Product - Cart - Placing an Order
- Showing Alerts respectively on different actions
- Visually apealing buttons with Hover Effects
- a fading Navbar which helps user to see information 
- RealTime updating of Cart items number which was done using React Redux
- single Page application switching from different components done using Usestate and conditional rendering

## Demo Images And Explaination
The images are related to various aspects of the frontend, including adding items to the cart, alerts, home page, orders, products, signing in, and signing up.

**Home Page/Landing Page when clicked on the site :**

  ![Home Page](DemoImg/home.png)

**After Landing to the Home Page, User can click on Sign In/ Sign Up for redirecting to Sign In Page**

- If db.json file has a registered user then signin page shows alert that Mail Id has been already used else User can continue with creating their Account the following is in the below Image.


![sign Up](DemoImg/signup.png)

- If User enters Wrong Password / Wrong Credentials, alert will be provided stating about the Wrong Credentials depicted in the below Image.
  
  
    ![Sign In](DemoImg/signin.png)


**After Signing Up to the website, The Website Automatically Redirects Users to Home Page and their Cart Items will also get Updated,this functionality can be seen in a localhost server but cannot be observed in deployed server due to no server or backend deployed**

**The Demo Image of Products Page is below**


  ![Product](DemoImg/product.png)

**Users can Directly add the product to the cart by clicking on the cart button on the specific Product,On click of specific product cart icon Users will be alerted telling them that Product has been added to Cart**

  ![Add to Cart Alert](DemoImg/addtocartalert.png)

**If Users Want to Take a Closer Look on the Product They Can Click on the Card Image of a specfic Product which then will be redirected to the single Produt Page,Below is the demo Implementation Image**

  ![singleprod](DemoImg/singleprod.png)

**Users can directly Buy or Add to cart even on the Single Product Page,They also have an option to go back to the Products Page**

**When User Clicks on the Cart Page,they will redirected to the cart page where the all the items they have choosed will be displayed and now they can increase the quantity or remove the product from cart and they can also check the total price in real time even when they are changing the quantity**

**Below is the Image when User have Zero Products in their Cart**

  ![emptycart](DemoImg/emptycart.png)

  
**Now, Below is the Demo Image When Users Have Products in their Cart**

  ![Cart](DemoImg/cart.png)


**After deciding the products and their Quantity Users can Place their Order by Clicking Place Order and on click of that users will get a modal showing success, Below is the Demo Image for said information**


  ![Order](DemoImg/order.png)

**On click of Close,Users will be redirected to their Home Page with updating their cart Items to Zero and adding them into their Orders History.**

### Improvements I did in my submission?
- Added a visually appealing navbar with Hover Effects
- Indicated number of cartItems on the navbar Cart Icon real time.
- Effectively Displayed alerts rather than just putting up an javascript alert. 
- added functionality when there is no items in cart
- Effectively switching between different pages.
- Maintained a structured directory and project readilibity.
- Used real world object or component intialization instead of using random words.

### What would I have done differently if I was allocated more time?
- I would have even added backend functionality for the deployed site using django (a python framework), I have good amount of experience of creating a django project with having different views function and also adding in sqlite models, adding these would make the webapp more real and would also allow CRUD operations.
- I would have created more visually appealing site with sliders and dropdowns to ease the process.
- I would have addded sessionId and cookies in order to keep the user logged for a certain period of time.
- Authentication of User at the time of Login In/ Sign Up using two factor authorization or OTP based login entry.
- Having Json based web tokens / tokenization of the webapp.
- Improving the overall performance of the webapp.

### Development Setup

```sh
- Clone this repo
- move to this project directory
- open the terminal and use the below commands to smoothly open the app and also the server
- npm install - To install the dependencies
- npm run server - To start the JSON server
- npm start - To start the react app
```

Voila, You're up. You can now view and create your unique login credentials and also able to save the products and can be visible even after refreshing the site or opening it later.




