function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function countPrimeFactors(n, m) {
    let count = 0;
    let i = 2;

    while (n > 1 && n % i === 0) {
        count++;
        n /= i;
    }

    for (i = 3; i * i <= n && i < m; i = i + 2) {
        while (n % i === 0) {
            n /= i;
            count++;
        }
    }
    if (n >= m) return -1;
    if (n !== 1) count++;
    return count;
}

function printMeetingFloor(input) {
    const divider = gcd(input[0], input[1]);
    const xTime = countPrimeFactors(input[0] / divider, input[2]);
    
    if (xTime === -1) {
        console.log(-1);
        return;
    }
    const yTime = countPrimeFactors(input[1] / divider, input[2]);
    
    if (yTime === -1) {
        console.log(-1);
        return;
    }
    console.log(xTime + yTime, divider);
}

// Sample input   Sample output
// 20 16 10       3 4  (5,10)=>1 (4,10)=>2,2=>2
// 100 120 10     3 20
// 160 100 10     4 20

// let input = [20, 16, 10];
// printMeetingFloor(input);


input = [100, 120, 10];
printMeetingFloor(input);

// input = [160, 100, 10];
// printMeetingFloor(input);

// input = [20, 16, 5];
// printMeetingFloor(input);