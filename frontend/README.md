# Product Catalog System

Project Description:

The Product Catalog System is a web application that allows users to manage products through a modern and user-friendly interface. It includes a login system, dashboard, and product management features. The application is responsive, visually appealing, and integrates a MySQL database for data persistence.

 Key Features: 

- Login System:
  - Username and password authentication
  - Success and error messages

- Dashboard:
  - View list of products
  - Add, edit, or delete products

- Product Management:
  - Add/Edit product forms with validation
  - Products displayed in a searchable and sortable table

- Responsive UI:
  - Gradient background for login page
  - Clean forms and tables

- Backend Integration:
  - REST APIs connecting frontend and backend
  - Data stored in MySQL database

---

Setup Instructions:

 Prerequisites:-

- Node.js & npm
- Java JDK 17 or higher
- Maven
- MySQL

---

Backend Setup: 

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd backend
Configure MySQL database:

Create a database named product_catalog

Update src/main/resources/application.properties:

properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/product_catalog
spring.datasource.username=root
spring.datasource.password=admin123
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
Run the backend:

bash
Copy code
mvn spring-boot:run
Backend will run at http://localhost:8080.

Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the frontend:

bash
Copy code
npm start
Frontend will run at http://localhost:3000.

How to Use the Application
Open http://localhost:3000 in a browser.

Log in using predefined credentials.

Once logged in:

View the list of products.

Add, edit, or delete products using the dashboard.

Search or filter products using the input fields.

Technologies Used
Frontend: React.js, HTML, CSS, JavaScript

Backend: Java Spring Boot, Maven, REST APIs

Database: MySQL

Tools: Visual Studio Code

Styling: CSS Flexbox, Gradient backgrounds, Responsive design

Project Structure
css
Copy code
product-catalog-system/
│
├── backend/                  
│   ├── src/main/java/        
│   ├── src/main/resources/   
│   └── pom.xml
│
├── frontend/                 
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md