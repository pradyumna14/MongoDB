In MongoDB, a capped collection is a fixed-size collection that maintains insertion order. Once a capped collection reaches its maximum size, it behaves like a circular queue, automatically overwriting the oldest documents with new ones. Capped collections are often used for logging, caching, or other use cases where maintaining a fixed-size dataset with a limited history is desirable.

<br>
From: MongoDB docs!