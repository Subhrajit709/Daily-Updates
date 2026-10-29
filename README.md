
----------------------------------------------------------
# Date : 29/10/26 
----------------------------------------------------------

# Day 1 – Self-Learning Progress

## 1. How the Web Works
Learned how the web works, from entering a URL in the browser to receiving a response from the server and displaying the webpage. Understood the basic flow of DNS resolution, establishing a connection, sending HTTP requests, receiving responses, and rendering content in the browser.

## 2. Concepts of a Web Browser
Studied the role of a web browser in retrieving, interpreting, and displaying web content. Learned about the browser's major components, including the networking system, HTML parser, CSS engine, JavaScript engine, and rendering engine.

## 3. DNS (Domain Name System)
Learned what DNS is and how it translates domain names into IP addresses so that browsers can locate the appropriate servers.

- Understood the basic DNS resolution process.
- Learned about DNS records and DNS caching.
- Explored how DNS helps users access websites using domain names instead of memorizing IP addresses.

## 4. Basics of HTTP (Hypertext Transfer Protocol)
Studied how HTTP enables communication between clients and servers using a request-response model.

- Understood how a browser sends a request to a server and receives a response.
- Learned the basic structure of HTTP requests and responses.
- Explored HTTP headers, request bodies, response bodies, and the role of HTTPS in secure communication.

## 5. HTTP Methods and Their Purposes
Learned about the commonly used HTTP methods and their applications.

- **GET:** Retrieves data or resources from a server.
- **POST:** Submits data to a server, commonly to create a resource.
- **PUT:** Replaces a resource or its representation.
- **PATCH:** Partially updates an existing resource.
- **DELETE:** Requests the deletion of a resource.
- **HEAD:** Retrieves response headers without the response body.
- **OPTIONS:** Retrieves communication options supported by a server or endpoint.

Also explored examples of how these methods are used in API communication.

## 6. HTTP Status Codes
Studied HTTP status codes and how they help developers understand the outcome of a request.

- **2xx – Success:** Indicates that a request was successfully processed according to the specific status.
  - `200 OK` – Request succeeded.
  - `201 Created` – A resource was created successfully.
  - `204 No Content` – Request succeeded without a response body.

- **3xx – Redirection:** Indicates that redirection or another action may be required.
  - `301 Moved Permanently` – The resource has a permanent redirect.
  - `302 Found` – The resource is temporarily available at another location.
  - `304 Not Modified` – A cached representation can be reused.

- **4xx – Client Errors:** Indicates an issue with the request or access to the requested resource.
  - `400 Bad Request` – The request is invalid or cannot be processed as sent.
  - `401 Unauthorized` – Authentication is required or invalid.
  - `403 Forbidden` – Access is denied.
  - `404 Not Found` – The requested resource was not found.

- **5xx – Server Errors:** Indicates that the server failed to fulfill a request.
  - `500 Internal Server Error` – An unexpected server-side error occurred.
  - `502 Bad Gateway` – A gateway received an invalid response from an upstream server.
  - `503 Service Unavailable` – The service is temporarily unavailable.
  - `504 Gateway Timeout` – A gateway did not receive a timely response from an upstream server.

## 7. Cookies vs. Local Storage vs. Session Storage
Learned the differences between the three browser storage mechanisms and their common use cases.

- **Cookies:** Store small pieces of data and can be sent automatically with matching HTTP requests. They are commonly used for session management and authentication.
- **Local Storage:** Stores key-value data in the browser that generally persists across browser restarts. It is commonly used for preferences and non-sensitive client-side data.
- **Session Storage:** Stores key-value data for a particular page session and is commonly used for temporary, tab-specific information.

Also explored how their lifetimes, JavaScript accessibility, and behavior during HTTP requests differ.

## 8. Basics of TCP (Transmission Control Protocol)
Learned about TCP and its role in reliable communication between devices over a network.

- Understood how TCP establishes connections and transfers data reliably.
- Learned about ordered data delivery, acknowledgments, and retransmission of lost data.
- Explored the relationship between TCP, HTTP, and HTTPS in web communication.

## 9. Introduction to Proxies
Studied the basic concept of proxies and how they act as intermediaries between clients and servers.

- **Forward Proxy:** Acts on behalf of clients when accessing external resources.
- **Reverse Proxy:** Sits in front of backend servers and forwards incoming requests to the appropriate services.
- Explored common uses such as request routing, caching, load balancing, and adding a security layer.

## 10. Introduction to GitHub and Its Tools
Started learning the basics of GitHub and its tools through a Udemy course.

- Learned the purpose of Git and GitHub in version control and collaborative development.
- Began exploring repositories and basic repository management.
- Started understanding how changes can be tracked and maintained in a project.

## Key Takeaways
Today's learning focused on understanding the fundamentals of web communication, browser functionality, DNS resolution, HTTP methods and status codes, browser storage, TCP, proxies, and the basics of GitHub.

These concepts provide a foundation for understanding how web applications communicate with servers, how browsers handle requests and responses, and how developers manage code using version control.

**Status:** Completed – Day 1 Self-Learning


