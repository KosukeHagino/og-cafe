'use strict';

$(function() {

    /**************************************************
        [機能] ハンバーガーメニュー
    **************************************************/
    $('#js-hamburger').on('click', function(){
        $('#js-hamburger, #js-header-nav').toggleClass('is-active');
    });


    /**************************************************
        [機能] スクロールに応じて表示（ページトップに戻るボタン）
    **************************************************/
    const $pagetop = $('#js-pagetop');
    let isVisible = false; // 無駄な処理をさせないための旗（フラグ）

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 600) {
            if (!isVisible) {
                $pagetop.addClass('is-show');
                isVisible = true;
            }
        } else {
            if (isVisible) {
                $pagetop.removeClass('is-show');
                isVisible = false;
            }
        }
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
        $target.addClass('is-show');
        
        // 100ms待ってから、次の描画タイミングで次の要素を処理
        setTimeout(() => {
            requestAnimationFrame(processQueue);
        }, 100);
    };

    const observer = new IntersectionObserver((entries) => {
        // 今すぐ出すべきものとキューに入れるものを分ける
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                
                // 画面の上半分より上にあるものは、キューに入れず即座に表示
                if (entry.boundingClientRect.top < window.innerHeight * 0.5) {
                    $(entry.target).addClass('is-show');
                } else {
                    scrollQueue.push(entry.target);
                }
            }
        });

        // キューに何か入っていて、処理中でなければ開始
        if (scrollQueue.length > 0 && !isProcessing) {
            processQueue();
        }
    }, {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0
    });

    // 監視開始を少しだけ遅らせる（ブラウザの初期負荷を逃がす）
    setTimeout(() => {
        $targets.each(function() {
            observer.observe(this);
        });
    }, 100);

});
