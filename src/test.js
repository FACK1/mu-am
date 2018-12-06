const test = require('tape')
const supertest = require('supertest')
const router = require('./router')
const getcity = require('./queries/getCities')
const runDbBuild = require('./database/db_build.js')

test('Testing ON', function (t) {
  t.deepEqual(2, 2, 'ON')
  t.end()
})

test('Testing html', (t) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err)
      t.equal(res.statusCode, 200, 'check status code is 200')
      t.end()
    })
})

test('Testing Public', (t) => {
  supertest(router)
    .get('/public/index.html')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((error, result) => {
      t.error(error)
      t.equal(result.statusCode, 200, 'Testing Public')
      t.end()
    })
})

// test('Testing ADD POST Endpoint', (t) => {
//     const expected =[{}]
//   supertest(router)
//     .post('/addpost')
//     .expect(200)
//     .expect('Content-Type', /json/)
//     .end((error, result) => {
//       t.error(error)
//       t.equal(result.statusCode, 200, 'Testing ADD POST Endpoint')
//       t.equal(result, expected, 'Testing ADD POST Endpoint')
//       t.end()
//     })
// })

test('Testing GET CITIES Endpoint', (t) => {
    supertest(router)
      .get('/getcities')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((error, result) => {
        t.error(error)
        t.equal(result.statusCode, 200, 'Testing GET CITIES Endpoint')
        t.end()
      })
  })

  test('Testing CITY INFO Endpoint', (t) => {
    supertest(router)
      .get('/getcitiesinfo')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((error, result) => {
        t.error(error)
        t.equal(result.statusCode, 200, 'Testing CITY INFO Endpoint')
        t.end()
      })
  })

  test("GET CITIES", t => {
    runDbBuild(function(err, res) {
      t.error(err, "No Error");

      let expected = [
        {
          id: 1,
          city_name: 'Jerusalem',
          city_pop: 933113,
          city_area: 125
        }
      ];

      getcity((err, result) => {
        if (err) console.log(err);
        t.deepEqual(result, expected, "Returns expected GET CITIES");

      });
    });
    t.end();
  });
