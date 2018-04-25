/**
 * ================================================================================================
 * containsAlphabet Lambda Function
 * ================================================================================================
 * Web Service to check if an input string contains all letters of the alphabet atleast once. 
 * ------------------------------------------------------------------------------------------------
 * This service receives the input string via a POST request, with the request body as:
 *   {
 *      "input": "The Input String Here!"
 *   }
 * ------------------------------------------------------------------------------------------------
 * This service returns a JSON string with the boolean response
 * Specifically - True if all letters of the alphabet found, otherwise false. 
 *   {
 *     "result": true
 *   }
 * ------------------------------------------------------------------------------------------------
 * @author Rob Mullins <rob.mullins.official@gmail.com>
 */

// Define the alphabet:
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

/**
 * Lambda Entry Point
 *
 * @param {object} event            - The Client/Caller Event data
 * @param {object} context          - Object containing runtime information for this Lambda function.
 * @param {LambdaCallback} callback - The callback that handles the Lambda completion.
 *
 * @callback LambdaCallback
 * @param {Error}         error     - Optional error object to indicate Lambda failure. 
 * @param {object|string} success   - Optional JSON.stringify compatible object or string to indicate Lambda success.
 */
exports.handler = function(event, context, callback) {
  // Ensure Input String Provided && Send Result if Input Contains Each Letter of Alphabet
  if (!event.body.input) return sendResponse(400, {success:false, error: 'Missing input string in request body'});
  else                   return sendResponse(200, {success:true, result: containsAlphabet(event.body.input)});

  /**
   * Checks if the input string contains every letter of the alphabet atleast once. 
   *
   * @param    {string} input - The input string to check if entire alphabet is present in.
   * @return   {bool}         - True if every letter of alphabet found atleast once, otherwise false. 
   */
  function containsAlphabet(input) {
    input = input.replace(/[^a-zA-Z]/gi, '').toLowerCase(); // Remove non-letters (numbers, special chars, etc) && convert to all lower case.
    let count = 0;
    for (let i=0; i < alphabet.length; i++) {
      if (input.indexOf(alphabet[i]) > -1) count++;
      if (count === 26) return true; 
    }
    return false;
  }

  /**
   * Send the Lamdba HTTP Response
   * @param  {int}    statusCode      - The HTTP Status Code
   * @param  {object} body            - The response body object, to be converted to a JSON string
   * @return {object}                 - Lambda formatted Response.
   */
  function sendResponse(statusCode, body) {
    return callback(null, {
      statusCode : statusCode,
      body       : JSON.stringify(body), 
      headers    : { 
        'Access-Control-Allow-Origin' : '*',
        'Content-Type'                : 'application/json' 
      }
    });
  }

}
