import request from 'supertest';
import app from '../index';



describe('Testing /products Endpoints', () => {

    describe('Products: ', () => {
        const product = {
            name: "Pullover",
            category: "cloths",
            unit_price: 7.5,
            quantity: 3
        }

        let response_object: {[key: string]: any};

        it('Create a new product', (done) => {
            request(app)
                .post('/products')
                .send({ product })
                .expect(201)
                .end(function (err, res) {
                    if (err) {
                        console.error(err);
                        console.log(res.body);
                        return done.fail();
                    }
                    expect(typeof res.body.product).toBe('object');
                    response_object = res.body.product;
                    return done();
                });
        });

        it('List all products', (done) => {
            request(app)
                .get('/products')
                .expect(200)
                .end(function (err, res) {
                    if (err) {
                        console.error(err);
                        console.log(res.body);
                        return done.fail();
                    }
                    expect(typeof res.body.products).toBe('object');
                    return done();
                });
        });


        it('Retrieve a specific product', (done) => {
            request(app)
                .get(`/products/${response_object.id}`)
                .expect(200)
                .end(function (err, res) {
                    if (err) {
                        console.error(err);
                        console.log(res.body);
                        return done.fail();
                    }
                    expect(typeof res.body.product).toBe('object');
                    return done();
                });
        });

        it('Validation error, Failure to create a new product', (done) => {
            request(app)
                .post('/products')
                .send({ products: product })
                .expect(400)
                .end(function (err, res) {
                    if (err) {
                        console.error(err);
                        console.log(res.body);
                        return done.fail();
                    }
                    expect(typeof res.body.message).toBe('string');
                    return done();
                });
        });

        it('Update product', (done) => {
            product.name = "Changed name";
            request(app)
                .put(`/products/${response_object.id}`)
                .send({ product })
                .expect(201)
                .end(function (err, res) {
                    if (err) {
                        console.error(err);
                        console.log(res.body);
                        return done.fail();
                    }
                    expect(typeof res.body.message).toBe('string');
                    return done();
                });
        });

        it('Remove product', (done) => {
            request(app)
                .delete(`/products/${response_object.id}`)
                .expect(200)
                .end(function (err, res) {
                    if (err) {
                        console.log(res.body);
                        console.log(err)
                        return done.fail();
                    }
                    return done();
                });
        });

    });
});