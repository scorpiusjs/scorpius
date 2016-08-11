/**
 * Fetch the config at the start of the program
 */

scorpius.adminExists = Injected && Injected.obj('adminExists') && Injected.obj('adminExists').exists;
AccountsTemplates.configure({
  forbidClientAccountCreation: !!scorpius.adminExists
});