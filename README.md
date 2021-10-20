# @joaosousa/react-native-progress-steps

A lightweight and simple React Native component that tracks your progress by steps.

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
  index: number;
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

| Name        | Description                            | Default | Type                        | Optional |
| ----------- | -------------------------------------- | ------- | --------------------------- | -------- |
| currentStep | The index of the currently active step | none    | Number                      | No       |
| steps       | List of steps                          | none    | [Array](#steps-array-model) | No       |
| marker      | Custom step identifier                 | Marker  | ReactElement                | Yes      |

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

## Demo

![/example](https://res.cloudinary.com/dwdhvtj90/image/upload/v1634760093/github/screen-1.gif)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
