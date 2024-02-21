  function seatA1(){
        
    const seatName = document.getElementById('seat-name');
    seatName.innerHTML = `<h4> A1 </h4>`;
    const className = document.getElementById('class-name');
    className.innerHTML = `<h4> Economy </h4>`;
    console.log('admad');
    document.getElementById('price-amount').innerHTML =`<h4> 550 ৳ </h4>`;
  }
 
  
  
 
//==========================================
  function handleClickOnce(){
    const secondSeat = document.getElementById('add-seat');
     const h2 = document.createElement('h2');
      h2.innerText= 'A2';
      secondSeat.appendChild(h2);

      //add class name
      const className = document.getElementById('add-class');
      const p = document.createElement('p');
      p.innerText = 'Economy';
      className.appendChild(p);

      //price add
      const Price = document.getElementById('Price');
      const h3 = document.createElement('h3');
      h3.innerText = '550 ৳';
      Price.appendChild(h3)
      document.getElementById('clickOnceButton').removeEventListener('click', handleClickOnce);

    }

    document.getElementById('clickOnceButton').addEventListener('click', handleClickOnce);

    //=========================
  function seatA3(){
    const secondSeat = document.getElementById('add-seat');
     const h2 = document.createElement('h2');
      h2.innerText= 'A3';
      secondSeat.appendChild(h2);

      //add class name
      const className = document.getElementById('add-class');
      const p = document.createElement('p');
      p.innerText = 'Economy';
      className.appendChild(p);

      //price add
      const Price = document.getElementById('Price');
      const h3 = document.createElement('h3');
      h3.innerText = '550 ৳';
      Price.appendChild(h3)
      document.getElementById('A3').removeEventListener('click', seatA3);

    }

    document.getElementById('A3').addEventListener('click', seatA3);
    //===========================================
  function seatA4(){
    const secondSeat = document.getElementById('add-seat');
     const h2 = document.createElement('h2');
      h2.innerText= 'A4';
      secondSeat.appendChild(h2);

      //add class name
      const className = document.getElementById('add-class');
      const p = document.createElement('p');
      p.innerText = 'Economy';
      className.appendChild(p);

      //price add
      const Price = document.getElementById('Price');
      const h3 = document.createElement('h3');
      h3.innerText = '550 ৳';
      Price.appendChild(h3)
      document.getElementById('A4').removeEventListener('click', seatA4);

    }

    document.getElementById('A4').addEventListener('click', seatA4);

    //=============
    function seatB1(){
      const secondSeat = document.getElementById('add-seat');
       const h2 = document.createElement('h2');
        h2.innerText= 'B1';
        secondSeat.appendChild(h2);
  
        //add class name
        const className = document.getElementById('add-class');
        const p = document.createElement('p');
        p.innerText = 'Economy';
        className.appendChild(p);
  
        //price add
        const Price = document.getElementById('Price');
        const h3 = document.createElement('h3');
        h3.innerText = '550 ৳';
        Price.appendChild(h3)
        document.getElementById('B1').removeEventListener('click', seatB1);
  
      }
  
      document.getElementById('B1').addEventListener('click', seatB1);
  //==============================

  function seatB2(){
    const secondSeat = document.getElementById('add-seat');
     const h2 = document.createElement('h2');
      h2.innerText= 'B2';
      secondSeat.appendChild(h2);

      //add class name
      const className = document.getElementById('add-class');
      const p = document.createElement('p');
      p.innerText = 'Economy';
      className.appendChild(p);

      //price add
      const Price = document.getElementById('Price');
      const h3 = document.createElement('h3');
      h3.innerText = '550 ৳';
      Price.appendChild(h3)
      document.getElementById('B2').removeEventListener('click', seatB2);

    }

    document.getElementById('B2').addEventListener('click', seatB2);

    //=============================
    function seatB3(){
      const secondSeat = document.getElementById('add-seat');
       const h2 = document.createElement('h2');
        h2.innerText= 'B3';
        secondSeat.appendChild(h2);
  
        //add class name
        const className = document.getElementById('add-class');
        const p = document.createElement('p');
        p.innerText = 'Economy';
        className.appendChild(p);
  
        //price add
        const Price = document.getElementById('Price');
        const h3 = document.createElement('h3');
        h3.innerText = '550 ৳';
        Price.appendChild(h3)
        document.getElementById('B3').removeEventListener('click', seatB3);
  
      }
  
      document.getElementById('B3').addEventListener('click', seatB3);

      //=======================
      function seatB4(){
        const secondSeat = document.getElementById('add-seat');
         const h2 = document.createElement('h2');
          h2.innerText= 'B4';
          secondSeat.appendChild(h2);
    
          //add class name
          const className = document.getElementById('add-class');
          const p = document.createElement('p');
          p.innerText = 'Economy';
          className.appendChild(p);
    
          //price add
          const Price = document.getElementById('Price');
          const h3 = document.createElement('h3');
          h3.innerText = '550 ৳';
          Price.appendChild(h3)
          document.getElementById('B4').removeEventListener('click', seatB4);
    
        }
    
        document.getElementById('B4').addEventListener('click', seatB4);

        //=====================
        function seatC1(){
          const secondSeat = document.getElementById('add-seat');
           const h2 = document.createElement('h2');
            h2.innerText= 'C1';
            secondSeat.appendChild(h2);
      
            //add class name
            const className = document.getElementById('add-class');
            const p = document.createElement('p');
            p.innerText = 'Economy';
            className.appendChild(p);
      
            //price add
            const Price = document.getElementById('Price');
            const h3 = document.createElement('h3');
            h3.innerText = '550 ৳';
            Price.appendChild(h3)
            document.getElementById('C1').removeEventListener('click', seatC1);
      
          }
      
          document.getElementById('C1').addEventListener('click', seatC1);

        //=====================
        function seatC2(){
          const secondSeat = document.getElementById('add-seat');
           const h2 = document.createElement('h2');
            h2.innerText= 'C2';
            secondSeat.appendChild(h2);
      
            //add class name
            const className = document.getElementById('add-class');
            const p = document.createElement('p');
            p.innerText = 'Economy';
            className.appendChild(p);
      
            //price add
            const Price = document.getElementById('Price');
            const h3 = document.createElement('h3');
            h3.innerText = '550 ৳';
            Price.appendChild(h3)
            document.getElementById('C2').removeEventListener('click', seatC2);
      
          }
          document.getElementById('C2').addEventListener('click', seatC2);
        //=====================
        function seatC3(){
          const secondSeat = document.getElementById('add-seat');
           const h2 = document.createElement('h2');
            h2.innerText= 'C3';
            secondSeat.appendChild(h2);
      
            //add class name
            const className = document.getElementById('add-class');
            const p = document.createElement('p');
            p.innerText = 'Economy';
            className.appendChild(p);
      
            //price add
            const Price = document.getElementById('Price');
            const h3 = document.createElement('h3');
            h3.innerText = '550 ৳';
            Price.appendChild(h3)
            document.getElementById('C3').removeEventListener('click', seatC3);
      
          }
      
          document.getElementById('C3').addEventListener('click', seatC3);
        //=====================
        function seatC4(){
          const secondSeat = document.getElementById('add-seat');
           const h2 = document.createElement('h2');
            h2.innerText= 'C4';
            secondSeat.appendChild(h2);
      
            //add class name
            const className = document.getElementById('add-class');
            const p = document.createElement('p');
            p.innerText = 'Economy';
            className.appendChild(p);
      
            //price add
            const Price = document.getElementById('Price');
            const h3 = document.createElement('h3');
            h3.innerText = '550 ৳';
            Price.appendChild(h3)
            document.getElementById('C4').removeEventListener('click', seatC4);
      
          }
      
          document.getElementById('C4').addEventListener('click', seatC4);