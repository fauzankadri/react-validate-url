#How To Properly Validate Parameters in React (Using React-Router-Dom)

##Purpose
You want to validate parameters anytime a user visits a specific route on your application. Let’s say you have a route, with a few parameters, one of them being a secret key to grant them access. What is the best way to validate the parameters? I’m here to propose a React friendly AND a simple solution

##Problem
Many will validate the parameters at the view component. For example, you have a component called Secret, which will display a secret message if the url parameters are valid. Most juniors will validate the url at the Secret component itself. This ultimately leads to a big mess because you are trying to mount the secret message, but the component is also doing extra bits, such as validating the url. If you were to reuse this component somewhere else, it would ultimately lead to a big mess and confusion and bunch of conflicts.

##Solution
The Secret component should do exactly what it’s supposed to, to render the secret message. What we will actually do is wrap that component, and check for validation before loading the Secret component itself.

##Notes
The reason why we are wrapping the component is to break url validation dependency from the actual component itself. This is to make sure the component is reusable and does exactly what it’s suppose to
For authentication, please use an API instead of an if/else. The coding approach will be slightly different but ultimately it's the same concept - to have a wrapper validating before loading the actual componen
