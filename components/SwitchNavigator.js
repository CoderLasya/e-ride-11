import {createSwitchNavigator,createAppContainer} from "react-navigation"

export default class App extends Component {
    render() {
        return <AppContainer />
    }
}

const AppSwitchNavigator = createSwitchNavigator(
    {
        Login: {screen: LoginScreen},
        RideScreen: {screen: RideScreen}
    },
    {
        initialRouteName: "Login"
    }
)

const AppContainer = createAppContainer(AppSwitchNavigator)