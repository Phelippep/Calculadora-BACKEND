import soma from './soma' 

describe('Teste de Soma', () => {
   test('deve verificar o resultado de uma soma', () => {
        expect(soma(3, 8)).toBeCloseTo(11)
   })

   test('deve verificar o resultado de uma soma', () => {
        expect(soma(3, 8)).not.toBeCloseTo(12)
   })
})
