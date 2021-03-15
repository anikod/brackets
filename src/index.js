module.exports = function check(str, brconf) {

      let array = str.split('');
      //console.log('array from string: ', array);
      //let i = 0;

      let brOpen, brClose, elCurr, elNext;

      for (let strah = 30; strah > 0; strah--) {

        //console.log('first for cycle is here; array.length: ', array.length);

        // checks block
        if (array.length == 0) {
          console.log('FIN: array length is 0!')
          return true;
        }

        //if (array.length%2 == 1) {
        //  console.log('FIN: array length is 1!');
        //  return 0;
        //}




        for (let i = 0; i < array.length; i++) {
          //console.log('Iteration: ', i, ' array.length: ', array.length);

          elCurr = array[i];
          //console.log('elCurr: ', elCurr);

          elNext = array[i + 1];
          //console.log('elNext: ', elNext);

          // проверяем элементы на соответствие
          for (let m = 0; m < brconf.length; m++) {

            //console.log('opening bracket is: ', brconf[m][0]);

            brOpen = brconf[m][0];
            brClose = brconf[m][1];
            //console.log('brOpen: ', brOpen, 'brClose: ', brClose);

            if (elCurr === brOpen && elNext === brClose) {
              array.splice(i, 2);
              //console.log('Gotcha! ------- ------- ------- -------');
              //console.log('Gotcha! ------- brOpen: ', brOpen, 'brClose: ', brClose);
            }

          }

        }



        //console.log('array length is: ', array.length);
       

        //i++;

      }




      console.log('UNSUCCESSFULL finish, array is: ', array);
      return false;




      //console.log('array from string: ', array);

      //  array.splice(1,2);
      //  console.log('array after splice: ', array);
      //arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
      //console.log('str: ', str.split('').splice(1,2));



      //console.log('brconfig: ', brconf);
      //console.log('brconfig length: ', brconf.length);

      // просматриваем все первые скобки
      //for (let i = 0; i < brconf.length; i++) {
      //console.log('opening bracket is: ', brconf[i][0]);
      //}










































}
