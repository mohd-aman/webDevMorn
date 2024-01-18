Object Descriptors
In the Object.defineProperty() static method, a new property is defined directly on an object, or an existing property is modified, and the object is returned.
An object's property descriptor consists of the following attributes:
value: This is the value associated with the property
writable: It indicates whether the property can be changed. If the property can be manipulated, it returns true
enumerable: Returns true if the property is visible during enumeration of the properties of the corresponding object.
Configurable: Indicates whether the property descriptor can be modified or removed.
Example:

const object1 = {};
Object.defineProperty(object1, 'property1', {
  value: 25,
  writable: false,
});
object1.property1 = 100;
// Throws an error in strict mode
console.log(object1.property1);
// Expected output: 25
Preventing : Reassignment, Create, update & delete
Initially, we need to comprehend how does reassignment, creating, deleting, or updating a property works.

Here's an example:

let config = {
    appName: "scaler.com",
    database: {
        host: "127.0.0.1",
        name: "mainDB",
        user: "root",
        password: "admin"
    }
}
/**
 * mutation/changes we can do on an object ->
 * 1. reassign,
 * 2. create a prop
 * 3. update a property
 * 4. remove a property
 */

// reassign
//config=10;
console.log(config);

// create a new property
config.tempServer = "127.0.018";

// delete a property
delete config.database.password;

// update a property
config.appName = "InterviewBit.com";
Ask the learners What if we need to prevent the modification of the object and its properties?

Let's look at some of the probable solutions that are actually not going to prevent the modification.

const: Instruction: Change the let keyword to const for the variable config in the above code and check if the properties can be modified in any way.
const does not prevent the modification.
Indeed, const only freezes the address of the object and not its properties.

So, there's should be an alternative. We can prevent extensions with the help of Object.preventExtensions().

Code:

let config = {
    appName: "scaler.com",
    database: {
        host: "127.0.0.1",
        name: "mainDB",
        user: "root",
        password: "admin"
    }
}

let unextendableObject = Object.preventExtensions(config);
unextendableObject.tempServer = "127.0.0.18";
console.log(unextendableObject);
Output:

{
  appName: 'scaler.com',
  database: {
    host: '127.0.0.1',
    name: 'mainDB',
    user: 'root',
    password: 'admin'
  }
}
So, with Object.preventExtensions(), new properties cannot be added. However, you can still update or delete a property.

The problem with Object.preventExtensions() is that it would work only on the first level. Therefore, any new property can be created at the inner level.

Here's an example:

let config = {
    appName: "scaler.com",
    database: {
        host: "127.0.0.1",
        name: "mainDB",
        user: "root",
        password: "admin"
    }
}

let unextendableObject = Object.preventExtensions(config);
// new property cannot be added at the first level
unextendableObject.tempServer = "127.0.0.18";

// new properties can be introduced at the inner level
unextendableObject.database.newpwd = "fake";

// You can still update or delete a property, even at the first level
unextendableObject.appName = "interviewbit.com";
delete unextendableObject.database.password;

console.log(unextendableObject);
Output:

{
  appName: 'interviewbit.com',
  database: { host: '127.0.0.1', name: 'mainDB', user: 'root', newpwd: 'fake' }
}
In order to prevent any deep extensions, we can manage to use Object.preventExtensions() for a particular property of an object.

Here's an example for the password of the database:

let config = {
    appName: "scaler.com",
    database: {
        host: "127.0.0.1",
        name: "mainDB",
        user: "root",
        password: "admin"
    }
}

let unextendableObject = Object.preventExtensions(config);
// new property cannot be added at the first level
unextendableObject.database = Object.preventExtensions(unextendableObject.database);
unextendableObject.tempServer = "127.0.0.18";

// new properties cannot be introduced at the inner level
unextendableObject.database.newpwd = "fake";

console.log(unextendableObject);
Output:

{
  appName: 'scaler.com',
  database: {
    host: '127.0.0.1',
    name: 'mainDB',
    user: 'root',
    password: 'admin'
  }
}
We also have some other methods. Object.seal: Object.seal allows you to seal an object, preventing new properties from being added or existing properties from being removed. However, it still allows you to modify the values of existing properties.

Let's see what happens when we user Object.seal:

const config = {
    appName: "scaler.com",
    database: {
        host: "127.0.0.1",
        name: "mainDB",
        user: "root",
        password: "admin"
    },
    extra: 10
}

let unextendableObject = Object.seal(config);

unextendableObject.database = Object.seal(unextendableObject.database);
unextendableObject.tempServer = "127.0.0.18"; //cannot add new property
unextendableObject.database.newpwd = "fake"; //cannot add new property
delete unextendableObject.extra; //cannot delete any property
unextendableObject.appName = "interviewbit.com"; //existing properties can be modified
console.log(unextendableObject);
Output:

{
  appName: 'interviewbit.com',
  database: {
    host: '127.0.0.1',
    name: 'mainDB',
    user: 'root',
    password: 'admin'
  },
  extra: 10
}
With Object.freeze, you cannot update, delete, or add any property.

/**
 * mutation/changes we can do on an object ->
 * 1. reassign -> const,
 * 2. create a prop -> object.preventExtension
 * 3. update and create -> Object.seal
 * 4. prevent create, update, delete -> Object.freeze
 */