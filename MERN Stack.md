ShopNest E-commerce

\------------------------

Architecture type: Monorepo full stack MERN (Monolithic deployment, microservices separation) componets.

* Frontend:React.js(single page application)
* Backend: Node.js+express.js(REST API)
* Database: MongoDB(NoSQL)
* Storage:Cloudinary(Image)
* Payment Gateway:Razorpay
* Email:Nodemailer(Gmail SMTP)
* Deployment:Render (Single Pod)



2\. TECHNOLOGY STACK

\-> frontend

* react -UI library
* react router
* redux toolkit
* react script



\->Backend

* Node.js-Runtime
* Express.js-MongoDB
* JWT(Jsonwebtoken)-Authentication
* Bcryptjs
* Multer-file uploaded middleware
* Cloudinary-Image storage
* Nodemailer-Email service
* Razorpay-Payment processing
* Dotenv-Envirnment variables
* cors-Cross-origin requests



Development:

* Nodemon-Auto-restart backend
* concurrently-Run multiple processes





\----------------------------------------------

3\. Database design(MongoDB)

collections:



Users:

* \_id(ObjectId)
* email(unique, indexed)
* password(hashed with bcryptjs)
* firstName, lastName
* phone
* address, city, state, pincode
* role(user/admin)
* createdAt,updatedAt





Products:

* \_id(ObjectId)
* name(indexed)
* description
* price(indexed for sorting)
* category(indexed)
* stock(inventory)
* imageUrl(CloudinaryURL)
* rating,reviews count
* createdAt, updatedAt



Orders:

* \_id(ObjectId)
* userId(foreign key to Users)
* orderltems(array of products with qty, price)
* shopingAddress
* paymentStatus(pending,completed, failed)
* ordersStatus(pending,procesing,shipped,devlived,cancelled)
* totalPrice, taxPrice,shipingPrice
* razorpayOrderId(payment reference)
* createdAt, updatedAt



Indexes:



* Users: email(unique),role
* Products: name, category,price
* orders:userId,createdAt
* Reviews:ProductId,userld





\--------------------------API-------------------

5\. API Endpoints

auth routes(/api/auth):



* POST/register-create new user
* POST/login - user login, return jwt
* GET /profile - get user profile(protected)
* put/profile - update



Product routes(/api/product):



* Get/get all products(with filters, pagination)
* get/:ID - product details
* post/- create product (admin only)
* put/:id - update product(adin only)
* Delete/:id -delete product (admin only)



Order Routes (/api/ordes):

* post/-ctreate order(user)
* get/-get user orders(user)
* get/:id - get order details
* put/:id - update order status(admin)



Payment routes(/api/payment):

* post/create-order - initiate razorpay
* post/verify - verify payment after complention



Analytics routes (/api/analytics):

* get/state - total sales, renenue, users(admin)
* get/monthly-sales-monthly revenue trend





6\. Authentication and security

JWT Flow:



* User registers/logins $\\rightarrow$ Password hashed with bcryptjs
* Server generates JWT token with userId + role
* Client stores token in localStorage
* Every API request includes token in Authorization header
* authMiddleware verifies JWT signature and expiry
* adminMiddleware checks if role === 'admin'



Security Measures:



* Passwords hashed (bcryptjs, salt rounds = 10)
* JWT tokens signed with JWT\_SECRET
* CORS enabled only for allowed origins
* Environment variables for sensitive data
* Input validation on backend
* SQL injection protection (using MongoDB, not SQL)





7\. NON-FUNCTIONAL REQUIREMENTS

Performance:



. Page load time < 3 seconds

. API response time < 500ms

· Image optimization via Cloudinary (CDN)

. Lazy loading for product images

· Pagination for product listing (20 items/page)

Scalability:



· Monorepo structure easily separates to microservices later

. Database indexed for fast queries

· Stateless backend (can run multiple instances)

. Redis can be added for caching/sessions

Availability:



. Deployed on Render with auto-restart

· Database backups via MongoDB Atlas

. Payment gateway fallback error handling

. User-friendly error messages

Security:



. HTTPS only (Render provides SSL)

. JWT for stateless auth

. CORS to prevent unauthorized API access

. Input sanitization

. Rate limiting can be added

Reliability:



. Transaction handling for orders

. Razorpay webhook for payment confirmation

. Email confirmation for order status

. Order rollback on payment failure

Maintainability:

. Clear folder structure

. Consistent naming conventions

. Comments in complex logic

. Version control (Git)

. Environment-based config



9\. PAYMENT FLOW

Razorpay Integration:



* User clicks "Pay" on Checkout
* Frontend calls POST /api/payment/create-order
* Backend creates Razorpay order with amount
* Frontend opens Razorpay payment modal
* User completes payment
* Razorpay calls webhook at POST /api/payment/verify
* Backend verifies signature and marks order as paid
* Email sent to user with order confirmation
* Order status updated to "processing"
* DEPLOYMENT (Render)



Environment Variables on Render:



* NODE\_ENV=production
* MONGO\_URI (MongoDB Atlas connection)
* JWT\_SECRET
* CLOUDINARY\_CLOUD\_NAME, CLOUDINARY\_API\_KEY, CLOUDINARY\_API\_SECRET
* RAZORPAY\_KEY\_ID, RAZORPAY\_KEY\_SECRET
* GMAIL\_USER, GMAIL\_PASS
* FRONTEND\_URL (Your Render URL)
* PORT (Auto-assigned)

