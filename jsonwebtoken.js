/*
    JWT stands for JSON Web Token
    It allows us to securely transfer data between two 
    parties in the form of a JSON object. To the naked 
    eye it may just look like a string of text but its
    more than that. And to highlight that I have provided
    an illustration below

    header.payload.signature

    As you can see the JSON Web Token is comprised of 3
    main things. We have the Header, PayLoad, and Signature.
    They are separated by a period. And together these three
    create a token.

    The header is made up of typically two things the type
    of token and the signing algorithm. 

    The payload is the actual data you are transferring. In
    JWT documentation this is referred to as claims. And their
    are three different types of them we have registered,
    public, and private. 

    The Signature is used to verify that the sender of the 
    JWT is who it says it is and to ensure that the message 
    wasn't changed along the way
*/

// Now to get started using JSON Web Token we first have to
// install it as its a third party module. To do that we 
// must enter the following into our node project terminal

// npm install jsonwebtoken --save

// Now once we have successfully installed the module we
// have to load it in. We can do so by using the require
// method. So it would look like this.

const jwt = require('jsonwebtoken');
// Note: You can name it whatever but the convention (the
// way things are usually done) is that you name it jwt.

// Now to create a token we must use the sign method. It
// takes in three things the payload, secretkey, and options
// So it would look like this.

const token = jwt.sign({username: 'irfan', password: 'urmom'}, 'mysecretkey', {expiresIn: '30d'});

// Now to check if the token is valid and has no problems. 
// To do so we must use the verify method on the jwt. It 
// will take in the token and secretkey.

const decoded = jwt.verify(token, 'mysecretkey');
// Now if you get no error in your console for the line
// above that means that the token has been verified and 
// you can use the data as you wish. Its best that when
// dealing with verifying the token you put it inside of
// a try catch block. This way you can handle if something
// goes wrong and the entire application doesn't have to
// end.
