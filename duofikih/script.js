function createCustomElement(anchorText, anchorLink){
  

    var aTag = document.createElement("a");
    aTag.href = anchorLink;
    aTag.innerHTML = anchorText;
  
    const list = aTag.classList;
    list.add("btn");
    list.add("btn-warning");
    list.add("d-block");
    list.add("ms-2");
    list.add("me-2");
    list.add("py-2");
    list.add("px-4");
    list.add("fw-bold");
    
    return aTag ;
  }
  
  function fetchData() {
    return fetch('https://raw.githubusercontent.com/thezahrand/revision-database/main/duofikih/quiz.json')
      .then(response => response.json());
  }
  
  fetchData().then(arr => {
    let cont = document.getElementById('cont');
  
    let ansCount = 0, qNum = 0;
  
    let a = document.getElementById('one');
    let b = document.getElementById('two');
    let c = document.getElementById('three');
    let d = document.getElementById('four');
    let f = document.getElementById('five');
  
    function nextQ() {
      if (qNum > 19) {
        akhir(ansCount);
        return;
      }
      a.checked = false;
      b.checked = false;
      c.checked = false;
      d.checked = false;
      f.checked = false;
      document.getElementById('spanQ').innerHTML = qNum + 1;
      document.getElementById('soalQ').innerHTML = arr[qNum].soal;
      document.getElementById('first').innerHTML = arr[qNum].opta;
      document.getElementById('second').innerHTML = arr[qNum].optb;
      document.getElementById('third').innerHTML = arr[qNum].optc;
      document.getElementById('fourth').innerHTML = arr[qNum].optd;
      document.getElementById('fifth').innerHTML = arr[qNum].opte;
    }
  
    nextQ();
  
    cont.addEventListener('submit', (e) => {
      e.preventDefault();
  
      let ans;
      if (a.checked) {
        ans = '0'
      } else if (b.checked) {
        ans = '1';
      } else if (c.checked) {
        ans = '2';
      } else if (d.checked) {
        ans = '3';
      } else if (f.checked) {
        ans = '4';
      } else {
        ans = 'Gak dijawab :(';
      }
  
      if (ans == arr[qNum].ans) {
        ansCount++;
      }
  
      qNum++;
      nextQ();
    })
  
  });
  
  function akhir(ansCount) {
    // document.getElementById('cont').innerHTML = '';
  
  
    // const h1 = document.getElementById('gameOverTitle');
    // const img = document.getElementById('gameOverImg');
    // const p = document.getElementById('gameOverText');
    // if (ansCount == 20) {
    //   h1.innerHTML = "YEAYYY KAMU KEREN BANGET!!!";
    //   img.setAttribute('src', '../assets/pics/z-2');
    //   p.innerHTML = "Kamu benar 20/20 alias bener semua! Kamu udah hebat, tapi jangan lupa terus belajar dan berlatih ya!!"
    // } else if (ansCount == 19) {
    //   h1.innerHTML = "WAH, KAMU NYARIS SEMPURNA!";
    //   img.setAttribute('src', '../assets/pics/h-3');
    //   p.innerHTML = "Kamu benar 19/20 alias nyaris banget dapet 100! Ayok cari kesalahannya dimana dan berlatih lagi!"
    // } else if (ansCount >= 16 && ansCount < 19) {
    //   h1.innerHTML = "KAMU UDAH MASUK NILAI KKM!";
    //   img.setAttribute('src', '../assets/pics/r-4');
    //   p.innerHTML = "Kamu benar" + ansCount + "/20! berarti udah masuk kkm nih, tapi jangan puas dulu, belajar lagi dan ulangi lagi kuisnya ya!"
    // } else if (ansCount < 16) {
    //   h1.innerHTML = "KAYAKNYA KAMU HARUS BELAJAR LAGI!";
    //   img.setAttribute('src', '../assets/pics/t-1');
    //   p.innerHTML = "Kamu benar" + ansCount + "/20! nilainya masih kurang dari KKM, kamu harus belajar lagi dan coba terus kuisnya ya!"
    // }
  
  
    const cont = document.getElementById('cont');
  
    const h1 = document.getElementById('qnumber');
    const p = document.getElementById('soalQ');
    if (ansCount == 20) {
      h1.innerHTML = "YEAYYY KAMU KEREN BANGET!!!";
      document.getElementById('options').innerHTML = '<img src="../assets/pics/z-2.png">';
      p.innerHTML = "Kamu benar 20/20 alias bener semua! Kamu udah hebat, tapi jangan lupa terus belajar dan berlatih ya!!"
    } else if (ansCount == 19) {
      h1.innerHTML = "WAH, KAMU NYARIS SEMPURNA!";
      document.getElementById('options').innerHTML = '<img src="../assets/pics/h-2.png">';
      p.innerHTML = "Kamu benar 19/20 alias nyaris banget dapet 100! Ayok cari kesalahannya dimana dan berlatih lagi!"
    } else if (ansCount >= 16 && ansCount < 19) {
      h1.innerHTML = "KAMU UDAH MASUK NILAI KKM!";
      document.getElementById('options').innerHTML = '<img src="../assets/pics/r-2.png">';
      p.innerHTML = "Kamu benar " + ansCount + "/20! berarti udah masuk kkm nih, tapi jangan puas dulu, belajar lagi dan ulangi lagi kuisnya ya!"
    } else if (ansCount < 16) {
      h1.innerHTML = "KAYAKNYA KAMU HARUS BELAJAR LAGI!";
      document.getElementById('options').innerHTML = '<img src="../assets/pics/t-1.png">';
      p.innerHTML = "Kamu benar " + ansCount + "/20! nilainya masih kurang dari KKM, kamu harus belajar lagi dan coba terus kuisnya ya!"
    }
  
    document.getElementById('submit').remove();
    document.getElementById("buttons").appendChild(createCustomElement("Mulai Ulang!", "kuis.html"));
    document.getElementById("buttons").appendChild(createCustomElement("Ke Beranda", "../index.html"));
  }
  
