var app = angular.module("pypsApp", []);

app.controller("ResultsController", function($scope) {
  $scope.chosenMathClasses = [
    {
      name: "Class 1", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    },
    {
      name: "Class 2", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    },
    {
      name: "Class 3", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    },
    {
      name: "Class 4", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    }
  ];

  $scope.chosenDDClasses = [
    {
      name: "Class 1", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    },
    {
      name: "Class 2", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    }
  ];

  $scope.chosenAHSClasses = [
    {
      name: "Class 1", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    },
    {
      name: "Class 2", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    },
    {
      name: "Class 3", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    },
    {
      name: "Class 4", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    },
    {
      name: "Class 5", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    },
    {
      name: "Class 6", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    }
  ];

  $scope.chosenMajorClasses = [
    {
      name: "Class 1", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    },
    {
      name: "Class 2", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    },
    {
      name: "Class 3", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    },
    {
      name: "Class 4", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    },
    {
      name: "Class 5", 
      credits: 4, 
      desc: "M, Th 1:30-3:20. AC 414. Short description goes here."
    }
  ];
});