import dynamicSort from './dynamicSort';

let classificationModels = [
  {
    name: 'Decision Tree Classification',
    value: 'decision-tree-classification',
    show: false,
    exact: true,
    description: 'Utilizes a sequence of decisions that are mapped similar to a tree.',
  },
  {
    name: 'Gradient Boosting Classification',
    value: 'gradient-boosting-classification',
    show: false,
    exact: true,
    description: 'Gradient Boosting Classification models...',
  },
  {
    name: 'K-Nearest Neighbors',
    value: 'k-nearest-neighbors-classification',
    show: false,
    exact: true,
    description: 'K-Nearest Neighbors models...',
  },
  {
    name: 'Logistic Regression',
    value: 'logistic-regression',
    show: false,
    description: 'Logistic Regression models...',
  },
  {
    name: 'Multi-layer Perceptron Classification (MLP)',
    value: 'multi-layer-perceptron-classification',
    show: false,
    exact: true,
    description: 'Multi-layer Perceptron Classification (MLP) models...',
  },
  {
    name: 'Random Forest Classification (RF)',
    value: 'random-forest-classification',
    show: false,
    exact: true,
    description: 'Random Forest Classification (MLP) models...',
  },
  {
    name: 'Stochastic Gradient Descent Classification (SGD)',
    value: 'stochastic-gradient-descent-classification',
    show: false,
    exact: true,
    description: 'Stochastic Gradient Descent Classification (SGD) models...',
  },
  {
    name: 'Support Vector Classification',
    value: 'support-vector-classification',
    show: false,
    exact: true,
    description: 'Support Vector Classification (SVC) models...',
  },
];
let regressionModels = [
  {
    name: 'Decision Tree Regression',
    value: 'decision-tree-regression',
    show: false,
    description: 'Decision Tree models...',
  },
  {
    name: 'Gradient Boosting Regression',
    value: 'gradient-boosting-regression',
    show: false,
    description: 'Gradient Boosting models...',
  },
  {
    name: 'Linear Regression',
    value: 'linear-regression',
    show: false,
    description: 'Linear Regression models...',
  },
  {
    name: 'Multi-layer Perceptron Regression (MLP)',
    value: 'multi-layer-perceptron-regression',
    show: false,
    description: 'Multi-layer Perceptron models...',
  },
  {
    name: 'Random Forest Regression (RF)',
    value: 'random-forestregression',
    show: false,
    description: 'Random Forest models...',
  },
  {
    name: 'Stochastic Gradient Descent Regression (SGD)',
    value: 'stochastic-graadient-descent-regression',
    show: false,
    description: 'Stochastic Gradient Descent models...',
  },
  {
    name: 'Support Vector Regression',
    value: 'support-vector-regression',
    show: false,
    exact: true,
    description: 'Support Vector Regression (SVR) models...',
  },
];

const mlModels = classificationModels.concat(regressionModels);

classificationModels = classificationModels.sort(dynamicSort('name'));
regressionModels = regressionModels.sort(dynamicSort('name'));

const root = '/documentation/machine-learning';
classificationModels.forEach((element) => {
  element.path = `${root}/${element.value}`;
});
regressionModels.forEach((element) => {
  element.path = `${root}/${element.value}`;
});

export { classificationModels, regressionModels, mlModels };
