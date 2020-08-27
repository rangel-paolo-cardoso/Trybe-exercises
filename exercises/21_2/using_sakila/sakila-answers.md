# Sakila Database Queries
Query examples answers
---

#### 6a. Use `JOIN` to display the first and last names, as well as the address, of each staff member. Use the tables `staff` and `address`:

Query: 
```sql
select stf.first_name, stf.last_name, adr.address, adr.district, adr.postal_code, adr.city_id 
from staff stf
left join address adr
on stf.address_id = adr.address_id;
```
Result:

  ![image](https://i.ibb.co/WFMDXr9/a.png)

#### 6b. Use `JOIN` to display the total amount rung up(sum) by each staff member in August of 2005. Use tables `staff` and `payment`.

Query: 
```sql
select stf.first_name, stf.last_name, sum(pay.amount)
from staff stf
left join payment pay
on stf.staff_id = pay.staff_id
WHERE month(pay.payment_date) = 8
and year(pay.payment_date)  = 2005
group by stf.first_name, stf.last_name;
```
Result:

  ![image](https://i.ibb.co/YNHdskr/b.png)

#### 6c. List each film and the number of actors who are listed for that film. Use tables `film_actor` and `film`. Use inner join.

Query: 
```sql
select flm.title, count(*) number_of_actors
from film flm
inner join film_actor fim_act
on flm.film_id = fim_act.film_id
group by flm.title
order by number_of_actors desc;
```
Result:

  ![image](https://i.ibb.co/dPbq7cR/c.png)

#### 6d. How many copies of the film `Hunchback Impossible` exist in the inventory system?

Query: 
```sql
select flm.title, count(*) number_in_inventory
from film flm
inner join inventory inv
on flm.film_id = inv.film_id
where lower(flm.title) = lower('Hunchback Impossible')
group by flm.title;
```
Result:

  ![image](https://i.ibb.co/8Xt1cRk/d.png)

#### 6e. Using the tables `payment` and `customer` and the `JOIN` command, list the total paid by each customer. List the customers alphabetically by last name:

Query: 
```sql
select cust.first_name, cust.last_name, sum(pay.amount) 'Total Amount Paid' 
from payment pay
join customer cust
on pay.customer_id = cust.customer_id
group by cust.first_name, cust.last_name
order by cust.last_name;
```
Result:

  ![image](https://i.ibb.co/ZmLRWwW/e.png)

#### 7a. The music of Queen and Kris Kristofferson have seen an unlikely resurgence. As an unintended consequence, films starting with the letters `K` and `Q` have also soared in popularity. Use subqueries to display the titles of movies starting with the letters `K` and `Q` whose language is English.

#### 7b. Use subqueries to display all actors who appear in the film `Alone Trip`.

#### 7c. You want to run an email marketing campaign in Canada, for which you will need the names and email addresses of all Canadian customers. Use joins to retrieve this information.

#### 7d. Sales have been lagging among young families, and you wish to target all family movies for a promotion. Identify all movies categorized as _family_ films.

#### 7e. Display the most frequently rented movies in descending order.

#### 7f. Write a query to display how much business, in dollars, each store brought in.

#### 7g. Write a query to display for each store its store ID, city, and country.

#### 7h. List the top five genres in gross revenue in descending order. (**Hint**: you may need to use the following tables: category, film_category, inventory, payment, and rental.)

#### 8a. In your new role as an executive, you would like to have an easy way of viewing the Top five genres by gross revenue. Use the solution from the problem above to create a view. If you haven't solved 7h, you can substitute another query to create a view.

#### 8b. How would you display the view that you created in 8a?

#### 8c. You find that you no longer need the view `top_five_genres`. Write a query to delete it.