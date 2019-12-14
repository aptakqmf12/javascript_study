window.onload = function(){
    var subject_td_array = Array.prototype.slice.call( document.querySelectorAll('#subject_table td') ), // 가져온 TD에 대한 NodeList를 Array로 변환.
    fruit_btn = document.querySelector('.fruit_btn')
    food_btn = document.querySelector('.food_btn')
    enjoy_btn = document.querySelector('.enjoy_btn')
    form = document.getElementById('form');
    input = document.querySelector('#form input');
    title = document.querySelector('h1');
    title_loop = 0;;
    num_info = document.querySelector('#number_info span'); 

function subject_making(arr){
    var shuffle = [];

        //셔플에 arr을 담아서 버튼을 클릭했을 때 셔플을 테이블에 뿌려준다.
    while(arr.length > 0){
        var random = arr.splice(Math.floor(Math.random()*arr.length), 1 )[0];
        shuffle.push(random); 
    }
        //셔플은 랜덤으로 섞인  arr/ arr는 빈배열
    arr = shuffle; //배열에 셔플을할당. (while문에 넣어주면 무한반복이 되므로 주의!)

    //테이블에 랜덤 주제를 뿌려줌
    for(var i=0 ; i<arr.length ; i++){
        subject_td_array[i].textContent = arr[i];
    }

    //게임테이블 초기화
    subject_td_array.forEach(function(td){
        td.classList.remove('selected');
        td.classList.remove('bingo');
    })
    clearInterval(title_loop);
    title.classList.remove('toggle_color');
    num_info.textContent = '0';

    alert('섞였습니다')
    input.focus();
}

fruit_btn.addEventListener('click',function(){
    var fruit_arr = ['사과','멜론','오렌지','귤','포도','망고','라임','딸기','키위'];
    subject_making(fruit_arr);
    });
    food_btn.addEventListener('click',function(){
        var food_arr = ['치킨','피자','햄버거','떡볶이','순대','오뎅','쫄면','돈까스','김밥'];
    subject_making(food_arr);
    });
    enjoy_btn.addEventListener('click',function(){
        var enjoy_arr = ['수영','게임','스윙댄스','쇼핑','자전거','놀이동산','노래방','클럽','콘서트'];
    subject_making(enjoy_arr);
    });
    

    // 인풋창에 텍스트입력시 td의 text와 비교
    
    form.addEventListener('submit',function(event){
    event.preventDefault();

    if( input.value == ''){
        alert('정답을 입력해주세요!')
    }
    else{
        for(var i=0 ; i<subject_td_array.length ; i++){
            function 클로저(i){
                if(subject_td_array[i].textContent == input.value){
                    subject_td_array[i].classList.add('selected');
                } 
            }
            클로저(i);    
        }
    }

    //빙고개수
    var bingo_count = 0;
    function count_bingo(){
        bingo_count = bingo_count + 1;
        num_info.textContent = bingo_count;
    }

    // 빙고처리
    if( (subject_td_array[0].classList.contains('selected') || subject_td_array[0].classList.contains('bingo'))&&
        (subject_td_array[1].classList.contains('selected') || subject_td_array[1].classList.contains('bingo'))&& 
        (subject_td_array[2].classList.contains('selected') || subject_td_array[2].classList.contains('bingo'))
        )
        {
            subject_td_array[0].classList.add('bingo');
            subject_td_array[1].classList.add('bingo');
            subject_td_array[2].classList.add('bingo');
            count_bingo();

        }
    if( (subject_td_array[3].classList.contains('selected') || subject_td_array[3].classList.contains('bingo'))&&
        (subject_td_array[4].classList.contains('selected') || subject_td_array[4].classList.contains('bingo'))&& 
        (subject_td_array[5].classList.contains('selected') || subject_td_array[5].classList.contains('bingo'))
        )
        {
            subject_td_array[3].classList.add('bingo');
            subject_td_array[4].classList.add('bingo');
            subject_td_array[5].classList.add('bingo');
            count_bingo();
        }
    if( (subject_td_array[6].classList.contains('selected') || subject_td_array[6].classList.contains('bingo'))&&
        (subject_td_array[7].classList.contains('selected') || subject_td_array[7].classList.contains('bingo'))&& 
        (subject_td_array[8].classList.contains('selected') || subject_td_array[8].classList.contains('bingo'))
        )
        {
            subject_td_array[6].classList.add('bingo');
            subject_td_array[7].classList.add('bingo');
            subject_td_array[8].classList.add('bingo');
            count_bingo();
        }
    if( (subject_td_array[0].classList.contains('selected') || subject_td_array[0].classList.contains('bingo'))&&
        (subject_td_array[3].classList.contains('selected') || subject_td_array[3].classList.contains('bingo'))&& 
        (subject_td_array[6].classList.contains('selected') || subject_td_array[6].classList.contains('bingo'))
        )
        {
            subject_td_array[0].classList.add('bingo');
            subject_td_array[3].classList.add('bingo');
            subject_td_array[6].classList.add('bingo');
            count_bingo();
        }
    if( (subject_td_array[1].classList.contains('selected') || subject_td_array[1].classList.contains('bingo'))&&
        (subject_td_array[4].classList.contains('selected') || subject_td_array[4].classList.contains('bingo'))&& 
        (subject_td_array[7].classList.contains('selected') || subject_td_array[7].classList.contains('bingo'))
        )
        {
            subject_td_array[1].classList.add('bingo');
            subject_td_array[4].classList.add('bingo');
            subject_td_array[7].classList.add('bingo');
            count_bingo();
        }
    if( (subject_td_array[2].classList.contains('selected') || subject_td_array[2].classList.contains('bingo'))&&
        (subject_td_array[5].classList.contains('selected') || subject_td_array[5].classList.contains('bingo'))&& 
        (subject_td_array[8].classList.contains('selected') || subject_td_array[8].classList.contains('bingo'))
        )
        {
            subject_td_array[2].classList.add('bingo');
            subject_td_array[5].classList.add('bingo');
            subject_td_array[8].classList.add('bingo');
            count_bingo();
        }
    if( (subject_td_array[0].classList.contains('selected') || subject_td_array[0].classList.contains('bingo'))&&
        (subject_td_array[4].classList.contains('selected') || subject_td_array[4].classList.contains('bingo'))&& 
        (subject_td_array[8].classList.contains('selected') || subject_td_array[8].classList.contains('bingo'))
        )
        {
            subject_td_array[0].classList.add('bingo');
            subject_td_array[4].classList.add('bingo');
            subject_td_array[8].classList.add('bingo');
            count_bingo();
        }
    if( (subject_td_array[2].classList.contains('selected') || subject_td_array[2].classList.contains('bingo'))&&
        (subject_td_array[4].classList.contains('selected') || subject_td_array[4].classList.contains('bingo'))&& 
        (subject_td_array[6].classList.contains('selected') || subject_td_array[6].classList.contains('bingo'))
        )
        {
            subject_td_array[2].classList.add('bingo');
            subject_td_array[4].classList.add('bingo');
            subject_td_array[6].classList.add('bingo');
            count_bingo();
        }
    //빙고종료
    if(bingo_count == 8){
        title_loop = setInterval(function(){
            title.classList.toggle('toggle_color');
        },200)
        setTimeout(function(){
            alert('게임종료');
        },300);
        
    }

    input.focus();
    input.value = ''; 
    });
}
