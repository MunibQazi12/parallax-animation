
const coinImage1 = document.getElementById("coin1Image");
const coinImage2 = document.getElementById("coin2Image");
const coinImage3 = document.getElementById("coin3Image");
const coinImage4 = document.getElementById("coin4Image");
const coinMainImage = document.getElementById("coinMainImage");
let monsterSkeletonImage = document.getElementById("monsterImage");
let peopleMonster = document.getElementById("peopleMonsterImage");
let mainBgOpacity = document.getElementById("mainBackgroundOpacity");
let treeBackground2 = document.getElementById("scrolltreeBackground2");
let riverBg2 = document.getElementById("scrollBackgroundRiver");
let  headingMain1 = document.getElementById("heading1");
let headingMain2 = document.getElementById("heading2");
let plotDataParagraph = document.getElementById("plotData");

window.addEventListener("scroll", () => {
    
    console.log({ scroll: window?.scrollY });
  
    let value = window.scrollY;

    const rotationValue = value/ 10;
    coinImage1.style.transform = `translateY(-50%) rotate(${rotationValue}deg)`;
    coinImage2.style.transform = `translateY(-50%) rotate(${rotationValue}deg)`;
    coinImage3.style.transform = `translateY(-50%) rotate(${rotationValue}deg)`;
    coinImage4.style.transform = `translateY(-50%) rotate(${rotationValue}deg)`;

    if (value > 200) {
        const backbgOpacity = (value / 100) * 0.1;
        mainBgOpacity.style.opacity = `${ backbgOpacity}`;
    }
    else if (value >= 150 && value < 300) {
        mainBgOpacity.style.opacity = ((value - 50) / 50) * 0.7 + 0.1;
    }
    else {
        mainBgOpacity.style.opacity = 1;
    }

    if (value >= 10 && value < 50) {
        let scaleValueBg = ((value - 10) / 40) * 0.4 + 1;
        treeBackground2.style.transform = 'scale(' + scaleValueBg + ')';
        riverBg2.style.transform = 'scale(' + scaleValueBg + ')';
        treeBackground2.style.transition = "all 1s ease-in-out";
        riverBg2.style.transition = "all 1s ease-in-out";
      } else if (value >= 50) {
        treeBackground2.style.transform = 'scale(1.4)';
        riverBg2.style.transform = 'scale(1.4)';
        riverBg2.style.transition = "all 1s ease-in-out";
        treeBackground2.style.transition = "all 1s ease-in-out";
      } else {
        treeBackground2.style.transform = 'scale(1)';
        riverBg2.style.transform = 'scale(1)';
        riverBg2.style.transition = "all 1s ease-in-out";
        treeBackground2.style.transition = "all 0.2s ease-in-out";
      }
      if (value >= 5 && value < 8) {
        headingMain1.style.opacity = "0.5";
        headingMain1.style.transition = "all 0.2s ease-in-out";
    } else if (value >= 8) {
        headingMain1.style.opacity = "0";
        headingMain1.style.transition = "all 0.2s ease-in-out";
    }
    else {
        headingMain1.style.opacity = "1";
        headingMain1.style.transition = "all 0.2s ease-in-out";
    }
    if (value >= 20 && value < 30) {
        headingMain2.style.opacity = ((value - 20) / 10) * 0.5;
      } else if (value >= 30 && value < 40) {
        headingMain2.style.opacity = 0.5 + ((value - 30) / 10) * 0.5;
      } else if (value >= 40) {
        headingMain2.style.opacity = 1;
    } else {
        headingMain2.style.opacity = 0;
        plotDataParagraph.style.top = `0px`;
    }

    if (value >= 800) {
        headingMain1.style.display = 'none';
        headingMain2.style.display = 'none';
      } else {
        headingMain1.style.display = 'flex';
        headingMain2.style.display = 'flex';
      }

      // Hide content after 50 scroll value
      if (value >= 900) {
        treeBackground2.style.display = 'none';
        riverBg2.style.display = 'none';
        riverBg2.style.transition = "all 1s ease-in-out";
        treeBackground2.style.transition = "all 1s ease-in-out";
      } else {
        treeBackground2.style.display = 'block';
        riverBg2.style.display = 'block';
        riverBg2.style.transition = "all 1s ease-in-out";
        treeBackground2.style.transition = "all 1s ease-in-out";
      }


    if (value >= 1500 && value <= 2000) {
        const verticalPosition = (value - 1500) * 1;
        coinImage1.style.top = `${verticalPosition}px`;
        coinImage2.style.bottom = `${verticalPosition}px`;
    } else if (value < 1500) {
        coinImage1.style.top = '0';
        coinImage2.style.bottom = '0';
    } else if (value > 2000) {
        coinImage1.style.top = '900px';
        coinImage2.style.bottom = '900px';
    }
    if(value>=2000 && value <= 2500){
        const rotationValue2 = value/ 5;
        coinMainImage.style.transform= `rotate(${-rotationValue2}deg)`;
        coinMainImage.style.transition = "all 1s ease-in-out";
    } else if (value < 2000) {
        coinMainImage.style.transform= `rotateZ(55deg)`;
        coinMainImage.style.transition = "all 1s ease-in-out";
    } else if (value > 2500) {
        coinMainImage.style.transform = "rotateZ(-55deg)";
        coinMainImage.style.transition = "all 1s ease-in-out";
    }
    if (value >= 1500 && value <= 2000) {
        const verticalPosition = (value - 1500) * 1;
        coinImage3.style.top = `${verticalPosition}px`;
        coinImage4.style.bottom = `${verticalPosition}px`;
    } else if (value < 1500) {
        coinImage3.style.top = '0';
        coinImage4.style.bottom = '0';
    } else if (value > 2000) {
        coinImage3.style.top = '900px';
        coinImage4.style.bottom = '900px';
    }
    if (value >= 3200 && value <= 4000) {
        const scaleValue = 1.3 + ((value - 3200) / 1000) * 0.1; // Gradually increases from 1.3 to 1.4 from scroll 3000 to 3500
        monsterSkeletonImage.style.transform = `scale(${scaleValue})`;     
        monsterSkeletonImage.style.transition = "transform 0.5s ease-in-out";
    } else if (value < 3200) {
        monsterSkeletonImage.style.transform = "scale(1)";
        monsterSkeletonImage.style.transition = "transform 0.5s ease-in-out";
    } else {
        monsterSkeletonImage.style.transform = "scale(1.5)";
        monsterSkeletonImage.style.transition = "transform 0.5s ease-in-out";
    }
    if (value >= 3200 && value <= 3500) {
        const bottomValue = (value - 3200) / 3200 
        peopleMonster.style.bottom = `${bottomValue}px`;    
        peopleMonster.style.transition = "0.5s ease-in-out";
    } else if (value < 3200) {
        peopleMonster.style.bottom ="-20%";
        peopleMonster.style.transition = "0.5s ease-in-out";
    } else if (value > 3500) {
        peopleMonster.style.bottom ="0";
        peopleMonster.style.transition = "0.5s ease-in-out";
    }

});