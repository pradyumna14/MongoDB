Transactions prvide data consistency by ensuring that either all the operations within the transaction are commited to the database, or none of them are.
<br>
Transactions are designed to provide ACID properties!

Atomicity: Transactions ensure that a group of operations either complete entirely or have no effect at all.

Consistency: Transactions maintain the database in a valid state, adhering to defined constraints and rules.

Isolation: Transactions are isolated from each other, preventing interference between concurrent transactions.

Durability: Once a transaction is committed, changes are durable and remain even in the event of system failures.

