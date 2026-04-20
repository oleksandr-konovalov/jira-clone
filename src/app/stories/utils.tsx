import type { PartialStoryFn } from "@storybook/csf";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { userMock1 } from "@domain/user";
import { UserContextProvider } from "@app/store/user.store";
import { ThemeProvider, Theme, Preference } from "@app/store/theme.store";

type Story = PartialStoryFn<any, Record<string, never>>; // eslint-disable-line @typescript-eslint/no-explicit-any

export const withMainContext = (Story: Story): JSX.Element => {
  return (
    <UserContextProvider user={userMock1}>
      <ThemeProvider
        specifiedTheme={Theme.LIGHT}
        specifiedPreference={Preference.SELECTED}
      >
        <div className="w-full">
          <Story />
        </div>
      </ThemeProvider>
    </UserContextProvider>
  );
};

export const withRemixStub = (children: JSX.Element) => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element: children,
      action: async () => {
        return {
          status: 200,
        };
      },
    },
  ]);

  return <RemixStub />;
};