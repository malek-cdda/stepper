## Stepper:-

Stepper is a process where we should move back and forth between step.Now i will try to make a good custom stepper.

## Usage:

` <StepperComponent
      data={data}											
      icon={icon}
      showStep={showStep}                                                                                                                                
      description={description} 									
      showLabel={showLabel}       									
    />`
In my stepper you need declare some props, i can explain it in the below:-

## Data: In stepper data must be look like this

`[{
      name: "home",
      icon: <FaStepForward />,
      description: "first i need to declare step design",
      label: "label",
    },] `

## Icon:

If you want to show icon , you set icon value is true , for this you can see icon in the middle of the stepper circle Look like this,

## ShowStep:

If you want to show step name , you set show step value is true , for this you can see step in the left-bottom of the stepper Look like this,

## Description:

If you want to see description in your data set, you need to true the description state.then you will be see the description

## ShowLabel:

If you want to see label in your data set, you need to true the show label state.then you will be see the label..

<..........................................................................................................>

You can also change the active and none active color , you need to only set activeColor = "blue", noneActiveColor = “green”

All are working as props data.. Happy coding❤️
