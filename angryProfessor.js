// https://www.hackerrank.com/challenges/angry-professor/problem


function angryProfessor(k, a){

    return a.filter(item => item++ <= 1).length >= k ? "YES" : "NO"
    
    }
    
    
    
    angryProfessor(3, [-1,-3,4,2,])