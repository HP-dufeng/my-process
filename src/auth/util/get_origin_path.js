import createHistory from 'history/createBrowserHistory';
const history = createHistory();

export default function getOriginPath(){
    const location = history.location;
    if(location.state)
        return location.state.from.pathname;
    else {
        if(location.pathname.indexOf('login') > 0)
            return '/';
        else
            return location.pathname;
    }
}