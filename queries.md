# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

```
SELECT ProductName, CategoryName
FROM Products AS P
JOIN Categories AS C
ON P.CategoryID = C.CategoryID
```

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

```
SELECT OrderID, ShipperName
FROM Orders AS O
JOIN Shippers AS S
ON O.ShipperId = s.ShipperID
WHERE O.OrderDate < '1997-01-09'
```

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

```
SELECT ProductName, Quantity
FROM OrderDetails AS OD
JOIN Products AS P
ON OD.ProductID = P.ProductID
JOIN Orders AS O
ON OD.OrderID = O.OrderID
WHERE O.OrderID = 10251
ORDER BY ProductName ASC
```

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

```
SELECT OrderID, CustomerName, LastName as EmployeeName
FROM ORDERS as O
JOIN Customers as C
ON O.CustomerID = C.CustomerID
JOIN Employees as E
ON O.EmployeeID = E.EmployeeID
```

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

```
SELECT CategoryName, Count(*) AS Count
FROM Products AS P
JOIN Categories AS C
ON P.CategoryID = C.CategoryID
GROUP BY CategoryName
```

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

```
SELECT OrderID, Count(*) AS ItemCount
FROM OrderDetails
GROUP BY OrderID
```

### Additional Queries (Courtesy of Gabe)

- Find the number of shipments by each shipper

```
SELECT ShipperName, Count(*) AS NumberOfShipments
FROM Orders AS O
JOIN Shippers AS S
ON O.ShipperID = S.ShipperID
GROUP BY ShipperName
ORDER BY NumberOfShipments DESC
```

- Find the top 5 best performing employees measured in number of orders

```
SELECT FirstName AS EmployeeName, Count(*) AS Sales
FROM Orders AS O
JOIN Employees AS E
ON O.EmployeeID = E.EmployeeID
GROUP BY EmployeeName
ORDER BY Sales DESC LIMIT 5;
```

- Find the category that brings in the most revenue
Look at OrderDetails, See which products are in Order

```
Select CategoryName, SUM(Price) as Revenue
FROM Products AS P
JOIN Categories AS C
ON P.CategoryID = C.CategoryID
JOIN OrderDetails AS O
ON P.ProductID = O.ProductID
GROUP BY CategoryName
ORDER BY Revenue DESC LIMIT 1
```

* Find the customer country with the most orders

```
SELECT Country, Count(Country) as Orders
FROM Orders AS O
JOIN Customers AS C
ON O.CustomerID = C.CustomerID
GROUP BY Country
ORDER BY Orders DESC LIMIT 1
```

- Find the shipper that moves the most cheese measured in total units

(likely incorrect)
```
SELECT Sum(Unit) AS CheeseUnits, S.ShipperID
FROM Products AS P
JOIN Categories AS C
ON P.CategoryID = C.CategoryID
JOIN Orders AS O
JOIN Shippers AS S
ON S.ShipperID = O.ShipperID
WHERE C.Description = "Cheeses"
GROUP BY S.ShipperID
ORDER BY CheeseUnits DESC
```