var bidResponseBuilder = openrtb.getBuilder({
    builderType: 'bidResponse'
  });

  //Trying to build a bid request without a response id
  try { 
    bidResponseBuilder
    .timestamp(moment.utc().format())
    .build();
  } catch(err) {
    //err.message: "Validation failed"
    //err.errors:
    //'[{
    //    dataPath: '.id',
    //    keyword: 'required',
    //    message: 'is a required property'
      //}]'
  }
