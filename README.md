# MERN Stack Expense Tracker

This is a fully-functioning full-stack expense tracker, built using the MERN Stack (MongoDB, Express, React, Node.js).

## Installation Instructions for Local Developement
1. Open `sampleconfig.env` inside the `config` folder and change the `MONGO_URI` to your MongoDB database. Basic instructions on how to create one can be found [here](https://www.mongodb.com/basics/create-database).

    **Afterwards, rename `sampleconfig.env` to `config.env`.**

2. Run the following commands in this order:

    i. Install the Server first: 
    ```
    npm install
    ````
    
    ii. Then install the Client:
    ```
    cd client
    npm install
    ``` 
3. Start both the front and back-ends:
    ```
    npm run dev
    ```

4. Additional Commands:
    
    i. To run only the back-end:
    ```
    npm run server
    ```

    ii. To run only the front-end:
    ```
    npm run client
    ```

## Building only the Client for Production
Ensure that `NODE_ENV=production` inside `config.env`. Then, run the following commands:
```
cd client
npm run build
```

## Building the entire app for Production
Ensure that `NODE_ENV=production` inside `config.env`. Then, run the following commands:
```
cd client
npm run build
cd ..
npm start
```