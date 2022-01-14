# @joaosousa/react-native-progress-steps

A lightweight and simple React Native component that tracks your progress by steps.

![example 1](https://res.cloudinary.com/dwdhvtj90/image/upload/v1635955323/github/example-1.gif)
![example horizontal](https://res.cloudinary.com/dwdhvtj90/image/upload/v1639762623/github/example-horizontal.gif)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Properties](#properties)
  - [ProgressSteps](#progresssteps)
    - [Steps array model](#steps-array-model)
    - [Colors customization model](#colors-customization-model)
- [Demos](#demos)
- [Contributing](#contributing)
- [License](#license)

## Installation

Using yarn:

```sh
yarn add @joaosousa/react-native-progress-steps
```

Using npm:

```sh
npm install @joaosousa/react-native-progress-steps
```

## Usage

You can use it as is, using default components:

```js
import ProgressSteps, { Title, Content } from '@joaosousa/react-native-progress-steps';

const [step, setStep] = useState(0);

<ProgressSteps
  currentStep={step}
  steps={[
    {
      id: /* Your id */,
      title: <Title>{/* Your title */}</Title>,
      content: <Content>{/* Your content */}</Content>,
    },
    {
      id: /* Your id */,
      title: <Title>{/* Your title */}</Title>,
      content: <Content>{/* Your content */}</Content>,
    },
  ]}
/>;

```

If you want to customize, you can use the property `colors` following the structure on the example below:

```js
import ProgressSteps, { Title, Content } from '@joaosousa/react-native-progress-steps';

const [step, setStep] = useState(0);

<ProgressSteps
  currentStep={step}
  steps={[
    {
      id: /* Your id */,
      title: <Title>{/* Your title */}</Title>,
      content: <Content>{/* Your content */}</Content>,
    },
    {
      id: /* Your id */,
      title: <Title>{/* Your title */}</Title>,
      content: <Content>{/* Your content */}</Content>,
    },
  ]}
  colors={{
    title: {
      text: {
        normal: '#94d2bd',
        active: '#005f73',
        completed: '#005f73',
      },
    },
    marker: {
      text: {
        normal: '#94d2bd',
        active: '#005f73',
        completed: '#f4f3ee',
      },
      line: {
        normal: '#94d2bd',
        active: '#005f73',
        completed: '#005f73',
      },
    },
  }}
/>
```

Or, alternatively, with your own custom components:

```js
import ProgressSteps from '@joaosousa/react-native-progress-steps';
import YourMarker from './YourMarker';
import YourTitle from './YourTitle';
import YourContent from './YourContent';

const [step, setStep] = useState(0);

<ProgressSteps
  marker={<YourMarker />}
  currentStep={step}
  steps={[
    {
      id: /*Your id*/,
      title: <YourTitle>{/*Your title*/}</YourTitle>,
      content: <YourContent>{/* Your content */}</YourContent>,
    },
    {
      id: /*Your id*/,
      title: <YourTitle>{/*Your title*/}</YourTitle>,
      content: <YourContent>{/* Your content */}</YourContent>,
    },
  ]}
/>;

```

To help you make visual changes, the property `stepState` will be automatically injected in your custom components with the following data:

```js
{
  stepIndex: number;
  isActive: boolean;
  isCompleted: boolean;
  isFirst: boolean;
  isFirstInteraction: boolean;
  isLast: boolean;
}
```

Here is an example of `stepState` usage in a custom component:

```js
import { Text } from 'react-native';

const CustomTitle = ({ children, stepState: { isCompleted } }) => {
  if (isCompleted) {
    return <Text>Well done! This step was completed.</Text>;
  }

  return <Text>{children}</Text>;
};

export default CustomTitle;
```

## Properties

### ProgressSteps

| Name        | Description                                    | Default    | Type                                  | Optional |
| ----------- | ---------------------------------------------- | ---------- | ------------------------------------- | -------- |
| currentStep | The index of the currently active step         | none       | Number                                | No       |
| steps       | List of steps                                  | none       | [Array](#steps-array-model)           | No       |
| orientation | Support for vertical or horizontal orientation | 'vertical' | String                                | Yes      |
| marker      | Custom step identifier                         | Marker     | ReactElement                          | Yes      |
| colors      | Property that let you add customization        | none       | [Object](#colors-customization-model) | Yes      |

#### Steps array model

```js
[
  {
    id?: string | number,
    title: ReactElement,
    content?: ReactElement,
  },
  ...
]
```

#### Colors customization model

```js
{
  title?: {
    text: {
      normal: string,
      active: string,
      completed: string
    }
  },
  marker?: {
    text: {
      normal: string,
      active: string,
      completed: string
    },
    line: {
      normal: string,
      active: string,
      completed: string
    }
  }
}

```

## Demos

| Example 1                                                                                        | Example 2                                                                                        | Example 3                                                                                        |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| ![example 1](https://res.cloudinary.com/dwdhvtj90/image/upload/v1635955323/github/example-1.gif) | ![example 2](https://res.cloudinary.com/dwdhvtj90/image/upload/v1635955315/github/example-2.gif) | ![example 3](https://res.cloudinary.com/dwdhvtj90/image/upload/v1635955314/github/example-3.gif) |
| [example/src/examples/Example1](example/src/examples/Example1)                                   | [example/src/examples/Example2](example/src/examples/Example2)                                   | [example/src/examples/Example3](example/src/examples/Example3)                                   |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
