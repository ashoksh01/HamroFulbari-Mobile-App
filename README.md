# “Hamrofulbari E-commerce Android App”
# Introduction
## Project Description and Application Does

This is the "Hamrofulbari" e-commerce-based Android mobile application, which allows every customer to purchase plants and flowers. This is the MERN stack connected through the API. This app was created using the dart programming language and the flutter application framework. Application data is stored in the MongoDB database. All application data is kept in a MongoDB database with complete user security. Users of this mobile application can sign up for an account or log in to purchase products. After logging in, the user is presented with the Hamrofulbari dashboard where they may add products to their list of favorites. The user can search for the product they want if they search for the product like Money treen it will display and the related product like money tree will also show while searching. The user may also add the item to their shopping cart and buy it over there. Users who place orders for products can pay with their Stripe E-wallets. User orders are displayed in user order history after payment via Stripe. The features that use the shaking and light sensors, Notification pop-ups, and offline data fetching use the hive system.  The app is responsive in Tab phones, android phones and is also connected to the wear OS, and notification is shown while the user login. All the user lists and products are saved in the database. This application makes use of the Flutter plugin shared preferences, which enables you to save data in a key-value format for subsequent retrieval.

Plants are essential to the earth and all other living things. Plants’ air from their leaves after absorbing carbon dioxide is necessary for humans and other organisms to breathe. All living things rely on plants for both sustenance and habitat. To remind you of everything, plants can also purify water, which is why I created the plant e-commerce app. We are happier and more productive, and the air is cleaned by plants in our homes and workplaces. Most of us lose out on nature and the advantages of being among plants because we live in apartments with little access to parks and ecological reserves. Instead of a pizza, why not order a plant? HamroFulbari shows up. Therefore, the HamroFulbari plant app is available to help Nepal find plants online. Future gardening trends should be shaped by us. All kinds of gardening supplies are available for purchase online at HamroFulbari. We provide flowers, plants, and containers. Customers and HamroFulbari are connected by it.

# Project Features
## Customer/Buyers
•	Login and Register.
•	Buy plants and flowers.
•	Add product to cart.
•	Searching products.
•	Able to view order history.
•	Edit profile.
•	Upload user photos in a user profile.
•	Change password.
•	Buy products through an online platform.
•	Payment through stripe E-wallet. 
•	Add the favorite plants to their favorite list.
•	Share preference.
•	Buy planting instruments.
•	Create a plant blog.

## Other Features
•	Shake Sensor (While shaking the phone it alerts the user to logout or stay login)
•	Light sensor (Proximity, when the user keeps the phone in pocket/ closer to sensor app light, is close)
•	GPS tracker sensor (To show the location of the store)
•	Notification pop-up feature.
•	Offline data fetch through the hive.
•	Responsive in tab.

# Technology Used
## Flutter for Android application

Google created the open-source user interface (UI) Software Development Kit (SDK) known as Flutter. It employs Dart as the programming language and supports the creation of iOS and Android apps. The client-side programming language Dart is open-source. It generates high-performance applications and is simple to learn. Users may quickly create stunning native mobile apps by learning just one language (Dart) with the help of the Google framework Flutter. A user interface may be composed using a variety of pre-built and pre-styled UI elements (referred to as widgets) provided by the Flutter SDK, which also offers the tooling to compile Dart code into native code. I used flutter because of Flutter's code reuse capabilities, you can create just one codebase and utilize it across several platforms, including the web, desktop, Android, and iOS. This allows you to deploy your software considerably quicker, lowers costs, and drastically reduces development time.

## Node JS for Backend

Node.js (Node) is an open-source development platform for server-side JavaScript execution. Node is great for designing apps that require a permanent connection from the browser to the server, such as chat, news feeds, and web push notifications. Node. js may easily be used as a server-side proxy, handling a huge number of simultaneous connections in a non-blocking way. It's notably handy for proxying different services with varying response times or gathering data from many sources.

## MongoDB for Data save

MongoDB's document-oriented data format makes it reasonably simple to add or edit fields, especially when compared to other NoSQL databases and even more so when compared to relational databases. As a result, programmers may easily alter an application because of MongoDB's adaptable data structure. Because of its flexible structure, it is simple to store data in a manner that programmers can use. MongoDB is also designed to scale very rapidly and supports all of the key attributes of contemporary databases, including transactions. MongoDB, which is simple to use, adaptable enough to grow and change with your website, and most reasonably priced, is the ideal NoSQL database for websites and API endpoints. Excellent compatibility already exists between MongoDB and popular web development languages including Python, PHP, Node, and JavaScript. MongoDB makes use between an uncontrolled query language and a document-oriented database schema. Users can quickly use and understand the product because of its scalability and versatility. The scale-out design of MongoDB enables programmers to use agile development techniques to create apps. It is well-liked by builders since it makes it easier for them to create web and enterprise apps. There are benefits and drawbacks of MongoDB that must be considered. Businesses need to be aware of both MongoDB's advantages and disadvantages.

# Challenges Faced
•	Time to time issue in Emulator 
•	Slow performance of laptop while using Android Studio and emulator.
•	Error occurs while doing add to cat and payment features. (Error solved through the error occurring)
•	Error occurring fetching the offline data and error solved and offline data fetched by using hive.
•	Emulator performance gets worst while doing testing.

# Architecture Repository pattern

The Hamrofulbari application makes use of the Repository pattern. Utilizing the hive system, the repository pattern is used to preserve offline data. The functionality needed to access data sources is encapsulated in repositories, which are classes or components. They decouple the infrastructure or technology required to access databases from the domain model layer and concentrate common data access functions, improving maintainability. This application logic is simpler to test thanks to the Repository pattern. Unit testing for your application is made simple by the repository pattern. Repository abstractions help you accomplish that aim since unit tests only test your code, not your infrastructure.

# The repository pattern is composed of three related components:
• Client: An element, such as a controller or service, that starts a data request.
• Repository: Prevents customers from obtaining data directly from the source while delivering it in a domain-friendly way through a designated API.
• Data source: A format particular to a data layer that provides data records; examples of data sources are RESTful APIs, SQLite connections, and MongoDB connections.

In hamrofulbari app,  I need to be able to get product information for the project even when I'm not online. I use a REST API and a private back-end to retrieve data for a database. Users are guaranteed a consistent and engaging experience whether they are online or offline because of this pattern. The product information that the app keeps locally will be available to view whether the user opens it again minutes or days later. The app's repository module starts updating this data in the background if it becomes out of date. The repository pattern offers the following key benefits:
• It makes it possible to access data from a single location, preventing the repetition of code related to data access.
• Even though the data layer is isolated from the application logic, the codebase becomes more unit testable; and we can easily change data sources without requiring time-consuming programming changes.

# State Management

State management is one of the most common and important procedures in an application's lifetime. Flutter, according to official documentation, is declarative. This implies that Flutter's UI is created by reflecting the current state of the user app. The provider is used in the state management process, it is used in addition to cart features. When the user adds the product in addition to the cart the provider listens to the whole data, if there is any change I will listen and hold in real-time.

Remi Rousselet developed the Provider package, which seeks to manage the state as clearly as possible. Widgets in Provider pay attention to state changes and update as soon as they are informed. Therefore, when a state change, just the impacted widget is modified rather than the complete widget, minimizing the impact on the product data and enhancing the app's performance. The provider widgets keep track of modifications and alert one another when a rebuild occurs. When the state changes, that specific widget rebuilds without impacting other widgets in the data update in the add-to-cart for the hamrofulbari product. The ChangeNotifier class in Flutter, ChangeNotifierProvider (which is mostly utilized in our sample app), and the User widgets are the three main elements that enable everything.

#Future Work
•	Multiple payment options
•	Multiple vendors.
•	Chatting features.
•	Product feedback and live session.
•	Offers and heavy discount offers.

# Conclusion
In conclusion, the "HamroFulbari" online store android mobile application was effectively developed. After completing all the growth processes, it is feasible to develop, and the desired outcome manifests. This application has undergone testing after development. I first tried out user testing, API testing, product testing, and Integration test. All the testing is successful for all the functions working of the hamrofulbari application. The expected result of the Android mobile application app is built. 


# Appendix

<img src="https://user-images.githubusercontent.com/69624734/182576723-152c30e3-0926-4c2b-a9f5-501acd1630f6.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182576767-41ca21f7-9e21-4566-a80d-e0c7726a5def.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182576944-aa576c74-7b4c-426c-b914-79c7dce9f700.png" width="30%"></img> 

<img src="https://user-images.githubusercontent.com/69624734/182577543-175cd3c6-388f-4d7f-9fa1-c7ab6e2335e7.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182577617-fab4d103-e424-47b9-a55c-d5898cd6eaeb.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182577693-c532743e-3837-44cc-b7de-38adf2e034bb.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182577723-5299eef2-0535-41c1-b228-bd060550f92a.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182577820-2db49b28-cc5a-4419-b796-177fbc23405a.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182578425-0165c937-067f-425b-8953-179ce8bd4bf0.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182580325-02707d1c-094d-46cd-a230-45910bde10e6.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182579603-c578495d-f91f-4f2f-b9a9-e45c8857114d.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182579713-df430786-79c8-4329-ad0e-554efbc05f95.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182579808-832c1388-ffd1-4535-b2aa-65e9ab33b986.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182579745-06913229-f097-41d6-93a0-df4903c5ce59.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182579993-f6555882-6c65-42e8-9678-a7a9132fb7a5.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182580048-9ff8f486-db5a-4d66-ab23-db4280ee3ffb.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182580572-f8bf66ca-0328-4e7f-9531-ce23fd871c7b.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182580138-449df749-ca12-41f2-b7a7-427b7ae3e862.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182580242-6e67baab-6e30-464b-b7b1-83218a7f8cba.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182580480-6d554e06-e19e-4bc2-966a-ca8fecc6d785.png" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182580691-0708821d-8099-470d-be78-ff315dbe1dd6.png" width="30%"></img> 

<img src="https://user-images.githubusercontent.com/69624734/182631179-bfd15777-a181-4fc5-a4ff-1b2776a1ec7a.jpg" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182631264-15ec8917-e3c0-4ea2-8239-1efd112f01c1.jpg" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182631330-7be7acef-304c-428a-9a5e-83fe628d9fb3.jpg" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182631623-2a434a11-e5bf-434a-95a8-1f463c876146.jpg" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182631737-12ee12fc-43be-40ae-8638-40b9c786db5a.jpg" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182631779-5e1a282c-e2c0-4727-b6ec-fb3a9ed27074.jpg" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182631842-5f8e35c5-1283-45e3-8cfe-ceae7a343f7c.jpg" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182631904-830c0bcc-6fb5-4f11-b6e8-29ef4ce65c90.jpg" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182631967-e07143ad-bbb0-4f2c-8ae6-765bc49c24cc.jpg" width="30%"></img> <img src="https://user-images.githubusercontent.com/69624734/182632003-33be2e3a-54b8-4f73-af52-c2c0e10ab21a.jpg" width="30%"></img> 

# Thank You!!!

