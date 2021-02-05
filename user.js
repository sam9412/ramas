  'use strict'
  const express = require('express');
  var UserController=require('../controllers/user');
  var md_auth=require('../middlewares/authenticated');
//this is ither comment
  var multipart = require('connect-multiparty');
  var md_upload=multipart({uploadDir:'./uploads/users'});

  var api=express.Router();
    console.log("this is my fist commit since client");
//this is a comment about a change that i maded.
  api.get('/probando-controlador', md_auth.ensureAuth ,UserController.pruebas);
  api.post('/register',UserController.SaveUser);
  api.post('/login',UserController.loginUser);
  api.put('/update-user/:id', md_auth.ensureAuth,UserController.updateUser);
  api.post('/upload-image-user/:id',[md_auth.ensureAuth, md_upload], UserController.uploadImage);
  api.get('/get-image-user/:imageFile',UserController.getImageFile);
  module.exports=api;
