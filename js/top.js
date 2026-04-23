'use strict';

$(function() {

    /**************************************************
        [機能] ハンバーガーメニュー
    **************************************************/
    $('#js-hamburger').on('click', function(){
        $('#js-hamburger, #js-header-nav').toggleClass('is-active');
    });


    /**************************************************
        [機能] ページトップに戻るボタン
    **************************************************/
    $('#js-pagetop').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 600);     // 0.6秒かけて戻る
    });


    /**************************************************
        [機能] スクロールに応じて表示
    **************************************************/
    const $targets = $('.js-scroll');
    if (!$targets.length) return;

    let scrollQueue = [];
    let isProcessing = false;
    
    const processQueue = () => {
        if (scrollQueue.length === 0) {
            isProcessing = false;
            return;
        }
        isProcessing = true;

        const $target = $(scrollQueue.shift());
        
        // 判定：もし処理が回ってきた時点で、すでに画面の上端を通り過ぎていたら
        // アニメーション（setTimeout）を待たずに即表示して、次の処理へ
        const targetTop = $target.offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();

        if (targetTop < $(window).scrollTop()) {
            $target.addClass('is-show');
            processQueue(); // 待たずに次へ
        } else {
            $target.addClass('is-show');
            setTimeout(processQueue, 300); // 画面内ならリズム良く出す
        }
    };

    const observer = new IntersectionObserver((entries) => {
        $.each(entries, function(i, entry) {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                
                // 【重要】画面の下から入ってきたか、一気にスクロールして上から入ったか判定
                // 画面の下側（rootMarginの内側）から入った場合のみキューに入れる
                const rect = entry.boundingClientRect;
                if (rect.top < 0) {
                    // すでに画面より上にある場合は、待たずに即表示
                    $(entry.target).addClass('is-show');
                } else {
                    scrollQueue.push(entry.target);
                    if (!isProcessing) processQueue();
                }
            }
        });
    }, {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0
    });

    $targets.each(function() {
        observer.observe(this);
    });

});
