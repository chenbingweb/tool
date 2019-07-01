//分页
/** 
 * 
 * className="active_detail" 
isScroll={tabIndex==1} 
callBack={this.getJoinList}
loaderClass="loaderClass"
path={joinTeamList}
param={}
 * 
*/
export class PageWap extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            loader:false,
            block:'block',
            content:''
        }
        this.pageFlag=false;
        this.page_num=0;
        this.page_size=10;

    }
    componentWillReceiveProps(props,state){
        // let { isScroll }=props;
        // if(isScroll)
        // {
        //     this.callBackFn()
        // }

    }
    componentDidMount(){
        $.showLoading()
        this.callBackFn()
      
    }
    componentDidUpdate(){
        let {isScroll}=this.props;
        if(isScroll)
        {
            window.addEventListener("scroll",this.scrollFn.bind(this))
        }
        else
        {
            window.removeEventListener('scroll',this.scrollFn,false)
        }
    }
    scrollFn(e){
        let {isScroll}=this.props;
        if(!this.pageFlag || !isScroll) return

        if(document.body.scrollHeight <= window.screen.height + document.body.scrollTop)
        {
            this.pageFlag=false
            this.setState({
                content:'加载更多',
                
            },()=>{
                this.callBackFn()
            })
           
           
            
        }
        // let that=this;
        // console.log(233)
        // if(!that.pageFlag) return
    
        // var viewHeight = $(this).height(); //可见高度  
        // var contentHeight = $(".active_detail").get(0).scrollHeight; //内容高度  
        // var scrollHeight = $(this).scrollTop(); //滚动高度  
        // if (scrollHeight / (contentHeight - viewHeight) >= 1) { //到达底部100%时,加载新内容 
        //    console.log(23)
         
        // }
    }
    callBackFn=async ()=>{
        let {callBack,path,loaderClass,debug,param}=this.props;
        let sendData={
            page_size:this.page_size,
            page_num:++this.page_num
        }
        if(param)
        {
            sendData=Object.assign(sendData,param)
        }

        let result = await Tool.Post(path,sendData,debug);
        $.hideLoading()
        if(result.errcode==0)
        {
            setTimeout(()=>{
            let data=result.data;
            if(data.length>=this.page_size)
            {
                this.pageFlag=true;
                if(this.page_num>1)
                {
                    this.setState({
                        
                        content:'',
                    })
                }
            }
            else
            {
                this.pageFlag=false;
                if(this.page_num>1)
                {
                    this.setState({
                        content:'暂无更多'
                    })
                }

            }
            callBack(data)
           
               
            },400)
            
        }
    }
    render(){
        let {className,isScroll,loaderClass}=this.props;
        let {content}=this.state;
        return <div className={className}>
            {
                this.props.children
                
            }
            {
                isScroll ?<p className={'no_data '+loaderClass || ''} >{content}</p> :''
            }
        </div>
    }
}