import React from 'react';
import PropTypes from 'prop-types';
import SimpleMediaCard from './card';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import {get} from '../utils/ajax.jsx';
import { CircularProgress } from 'material-ui/Progress';


const styleSheet = createStyleSheet({
    root: {
      flexGrow: 1,
      padding:"25px 0"
    },
    container: {
      justifyContent: "center",
      width: "100%",
      margin: 0
    },
    progress: {
      display: "block",
      margin: "0 auto",
    }
});

class FullWidthGrid extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        "loading": true,
        "list": []
      }
    }
    componentDidMount() {
        let url = this.props.url;
        get(url).then((data)=>{
          this.setState({"loading": false,"list": data.items});
        }).catch((error)=>{
          console.log(error)
        });
    }
    render() {
        const classes = this.props.classes;
        if(this.state.loading){
            return (
                <CircularProgress color="accent" size={50} className={classes.progress}/>
            );                         //返回预加载的图片
        }
        else if(!this.state.loading && this.state.list.length !== 0){
            return(
                <div className={classes.root}>
                    <Grid container gutter={40} className={classes.container} align={"center"} justify={"center"}>
                        {this.state.list.map(per=>{
                            return (
                                 
                                    <Grid item xs={10} sm={5} className={classes.item}>
                                        <SimpleMediaCard title={per.login} pic={per.avatar_url} content={"变量暂时为空"} />
                                    </Grid>                     
                            )
                          } 
                       )}
                    </Grid>
                </div>
            );                             //返回一个个SimpleMediaCard组件，将ajax获得的值以属性传给它
        }
    }

}

export default withStyles(styleSheet)(FullWidthGrid);