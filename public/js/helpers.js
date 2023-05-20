// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
//Assessment: Assignment 2
//Author: Vo Chau Thang - s3927178, Nguyen Ngoc Kim - s3970589, 
//        Nguyen Huu Quoc Huy - s3986423, Lam Uy Vu - s3938804, Lee Jae Sung - s3977739
//Acknowledgement: Acknowledge the resources that you use here. 

const Handlebars = require('handlebars');

Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

  switch (operator) {
    case '==':
      return (v1 % v2 == 0) ? options.fn(this) : options.inverse(this);
    case '%':
      return ((v1 + 1) % v2 == 0) ? options.fn(this) : options.inverse(this);
    default:
      return options.inverse(this);
  }

});
