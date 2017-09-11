/**
 * OrganizzatoreController
 *
 * @description :: Server-side logic for managing organizzatores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  orgCompany: (req, res) => {
      Organizzatore.find().exec( (err, org) => {
          return res.view('addEvento',{addEvento: org});
      });
  }
};
