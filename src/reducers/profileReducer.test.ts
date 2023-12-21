import {ProfileType} from '../store/store';
import {addPostAC, changeTitlePostAC, profileReducer} from './profileReducer';

let state: ProfileType

beforeEach(() => {
    state = {
        description: [
            {
                avatar: 'https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg',
                characteristic: 'Hello, my name is Vlad. I am learning javascript and this is one of my first projects'
            }
        ],
        posts: [
            {
                id: 1,
                img: 'https://s.pfst.net/2017.06/573451167567fc28a75b50a9ca9daa201354bffe9e1b_b.jpg',
                title: 'Post_1',
                likeCount: 15
            },
            {
                id: 2,
                img: 'https://s.pfst.net/2017.03/53828446756776707179e90c1242cec20a6230e240af_b.jpg',
                title: 'Post_2',
                likeCount: 35
            },
            {
                id: 3,
                img: 'https://s.pfst.net/2017.06/573307367567338c64d039da5900969936d2fa41d1d6_b.jpg',
                title: 'Post_3',
                likeCount: 5
            },
        ],
        newTitlePost: '',
    }
})

test('post should be added', () => {
    const result = profileReducer(state, addPostAC())
    expect(result.posts.length).toBe(4)
    expect(result.posts[0].id).toBe(1)
    expect(result.posts[3].id).toBe(4)
    expect(result.posts[3].title).toBe('')
})
test('value of input should be change in  newTitlePost', () => {
    const result = profileReducer(state, changeTitlePostAC('new title'))
    expect(result.newTitlePost).toBe('new title')
})

