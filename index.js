const canvas = document.querySelector('.widget-scene-canvas')
if (canvas) {
  // canvas elementにmirroredクラスがあるかを確認
  const isMirrored = canvas.classList.contains('mirrored')
  if (isMirrored) {
    // canvas elementにmirroredクラスがある場合は、mirroredクラスを削除
    canvas.classList.remove('mirrored')
    // 反転を解除
    canvas.style.transform = ''
    return
  } else {
    // canvas elementにmirroredクラスがない場合は、mirroredクラスを付与
    canvas.classList.add('mirrored')
    // 反転する
    canvas.style.transform = 'rotateY(180deg)'
  }
}
