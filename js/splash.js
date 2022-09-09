setTimeout(function(){
    $('#splash').addClass('loaded');
}, 8100);

$(function(){
    const loadingBox = document.getElementById('loadingbox');
    const loading = document.getElementById('loading');

    // タイピングアニメーション
    $('#splashtext').t({
        speed_vary: true,
        // 終了時ローディングボックスを表示&ローディングアニメーション開始
        fin: function(){
            loading.style.visibility = 'visible';
            loadingBox.style.visibility = 'visible';
            $('#loadingline').addClass('loadingline2');
        }
    });
    // ローディングアニメーション終了時2.1秒待って要素を削除する
    loadingBox.addEventListener('animationend', () => {
        setTimeout(function(){loadingBox.style.display = 'none';}, 3100);
        
    });
});
