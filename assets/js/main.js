const containerRef = document.querySelector('.referencias')
var precios  = [
    '90,000',
    '130,000',
    '150,000',
    '60,000',
    '60,000',
    '60,000',
    '90,000',
    '90,000',
    '130,000',
    '120,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    '150,000',
    
]
window.addEventListener('load', function () {

    let inner = '';
    for (let i = 0; i < precios.length; i++) {
        inner += `
        <div class="col-span-2 target rounded border rounded-xl overflow-hidden bg-whitem relative shadow-lg h-72">
        <div class="h-56  w-full overflow-hidden flex items-center justify-center">
            <img src="/assets/img/ropa/${i}.jpg"
                class="h-full rounded" alt="">
        </div>
        <div class="h-24 p-3">
            <div class="titulo text-xs text-gray-600 font-bold">REF ${i < 10 ? '00'+(i+1) : '0'+ (i+1)}</div>
            <div class="precios absolute text-md  font-bold text-green-700 bottom-3 end-3">$ ${precios[i]}</div>
        </div>
    </div>
        `
    }

    containerRef.innerHTML = inner
    
})