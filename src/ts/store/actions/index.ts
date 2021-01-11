export * from './loading';

export const MOCK_SIDE_EFFECT = 'MOCK_SIDE_EFFECT';

export const mockSideEffect = (): IGenericAction => ({
  type: MOCK_SIDE_EFFECT,
});
