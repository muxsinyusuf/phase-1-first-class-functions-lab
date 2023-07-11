
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  

  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  

  const fareDoubler = createFareMultiplier(2);
  
  
  const fareTripler = createFareMultiplier(3);
  
  
  const selectDifferentDrivers = function(drivers, selectingFunction) {
    return selectingFunction(drivers);
  };
  
  
  const drivers = ['John', 'Jane', 'Mike', 'Sara'];
  
  console.log(returnFirstTwoDrivers(drivers));  
  console.log(returnLastTwoDrivers(drivers));  
  
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));  
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));  
  
  console.log(createFareMultiplier(4)(10));  
  console.log(fareDoubler(10));  
  console.log(fareTripler(10));  
  // Code your solution in this file!
