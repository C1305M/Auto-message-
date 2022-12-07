function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const allNetball = {
    playerName: ['Steph', 'Zack', 'Ryan', 'Claire', 'Janine', 'Amilia', 'Vicky'],
    playerPosition: ['GS', 'GA', 'WA', 'C', 'WD', 'GD', 'GS'],
    quaterNumber: ['1', '2', '3', '4']
  }
  
  // Store the info in an array
  let aboutNetball = []
  
  // Iterate over the object
  for(let prop in allNetball) {
    let optionIdx = generateRandomNumber(allNetball[prop].length)
  
    // use the object's properties to customize the message being added to aboutNetball
    switch(prop) {
      case 'playerName':
        aboutNetball.push(`Player name: ${allNetball[prop][optionIdx]}.`)
        break
      case 'playerPosition':
        aboutNetball.push(`Will be playing: ${allNetball[prop][optionIdx]}.`)
        break
      case 'quaterNumber':
        aboutNetball.push(`Position in quater: ${allNetball[prop][optionIdx]} good luck.`)
        break
      default:
        aboutNetball.push('There is not enough info.')
    }
  }
  function formatNetball(netball) {
    const formatted = aboutNetball.join('\n')
    console.log(formatted)
  }
  formatNetball(aboutNetball);