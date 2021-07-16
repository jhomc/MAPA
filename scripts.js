var C = []
var P = []
var R = []
var i = 1

function createC() {
    C.push(`C-${i++}`)
    i = i++

    const lastItem = C[C.length - 1]
    document.querySelector('span').innerHTML = lastItem
}

function createP() {
    P.push(`P-${i++}`)
    i = i++
    
    const lastItem = P[P.length - 1]
    document.querySelector('span').innerHTML = lastItem
}

function createR() {
    R.push(`R-${i++}`)
    i = i++
    
    const lastItem = R[R.length - 1]
    document.querySelector('span').innerHTML = lastItem
}

function callOne() {
    if ( P != '' ) {
        const firstItem = P[0]
        P.shift()

        document.getElementById('passShow').innerHTML = firstItem
        document.getElementById('ticketWidow').innerHTML = 'Caixa 01'
    } else if ( R != '' ) {
        const firstItem = R[0]
        R.shift()

        document.getElementById('passShow').innerHTML = firstItem
        document.getElementById('ticketWidow').innerHTML = 'Caixa 01'
    } else if ( C != '') {
        const firstItem = C[0]
        C.shift()

        document.getElementById('passShow').innerHTML = firstItem
        document.getElementById('ticketWidow').innerHTML = 'Caixa 01'
    }   return
}

function callTwo() {
    if ( R != '' ) {
        const firstItem = R[0]
        R.shift()

        document.getElementById('passShow').innerHTML = firstItem
        document.getElementById('ticketWidow').innerHTML = 'Caixa 02'
    } else if ( P != '' ) {
        const firstItem = P[0]
        P.shift()

        document.getElementById('passShow').innerHTML = firstItem
        document.getElementById('ticketWidow').innerHTML = 'Caixa 02'
    } else if ( C != '') {
        const firstItem = C[0]
        C.shift()

        document.getElementById('passShow').innerHTML = firstItem
        document.getElementById('ticketWidow').innerHTML = 'Caixa 02'
    }   return
}

function callThree() {
    if ( R != '' ) {
        const firstItem = R[0]
        R.shift()

        document.getElementById('passShow').innerHTML = firstItem
        document.getElementById('ticketWidow').innerHTML = 'Caixa 03'
    } else if ( P != '' ) {
        const firstItem = P[0]
        P.shift()

        document.getElementById('passShow').innerHTML = firstItem
        document.getElementById('ticketWidow').innerHTML = 'Caixa 03'
    } else if ( C != '') {
        const firstItem = C[0]
        C.shift()

        document.getElementById('passShow').innerHTML = firstItem
        document.getElementById('ticketWidow').innerHTML = 'Caixa 03'
    }   return
}

function callFour() {
    if ( C != '' ) {
        const firstItem = C[0]
        C.shift()

        document.getElementById('passShow').innerHTML = firstItem
        document.getElementById('ticketWidow').innerHTML = 'Caixa 04'
    } else if ( P != '' ) {
        const firstItem = P[0]
        P.shift()

        document.getElementById('passShow').innerHTML = firstItem
        document.getElementById('ticketWidow').innerHTML = 'Caixa 04'
    } else if ( R != '') {
        const firstItem = R[0]
        R.shift()

        document.getElementById('passShow').innerHTML = firstItem
        document.getElementById('ticketWidow').innerHTML = 'Caixa 04'
    }   return
}