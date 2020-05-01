window.addEventListener('scroll', function(x){
    // console.log(window.scrollY) 记录y轴上滚动的距离
    if(window.scrollY>0){
      topNavBar.classList.add("sticky")
    }else{
      topNavBar.classList.remove("sticky")
    }
  })