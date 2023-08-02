import { describe, expect, it } from 'vitest'
import { player as reducer, play, next } from './player'

describe('player slice', () => {
  const exampleState = {
    course: {
      modules: [
        {
          id: '1',
          title: 'Iniciando com React',
          lessons: [
            { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
            { id: 'Pj8dPeameYo', title: 'CSS Global', duration: '03:23' },
          ],
        },
        {
          id: '2',
          title: 'Estrutura da aplicação',
          lessons: [
            {
              id: 'gE48FQXRZ_o',
              title: 'Componente: Comment',
              duration: '13:45',
            },
            { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' },
          ],
        },
      ],
    },
    currentModuleIndex: 0,
    currentLessonIndex: 0,
  }

  it('should be able to play', () => {
    const { currentModuleIndex, currentLessonIndex } = reducer(
      exampleState,
      play([1, 2]),
    )

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(2)
  })

  it('should be able to play next video automatically', () => {
    const { currentModuleIndex, currentLessonIndex } = reducer(
      exampleState,
      next(),
    )

    expect(currentModuleIndex).toEqual(0)
    expect(currentLessonIndex).toEqual(1)
  })

  it('should be able to jump to the next module automatically', () => {
    const { currentModuleIndex, currentLessonIndex } = reducer(
      { ...exampleState, currentLessonIndex: 1 },
      next(),
    )

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(0)
  })

  it('should not update the current module and lesson index if there is no next lesson avaiable', () => {
    const { currentModuleIndex, currentLessonIndex } = reducer(
      { ...exampleState, currentModuleIndex: 1, currentLessonIndex: 1 },
      next(),
    )

    expect(currentModuleIndex).toEqual(1)
    expect(currentLessonIndex).toEqual(1)
  })
})
