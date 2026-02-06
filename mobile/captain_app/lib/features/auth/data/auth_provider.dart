import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../core/api/api_client.dart';
import 'package:shared_preferences/shared_preferences.dart';

final apiClientProvider = Provider((ref) => ApiClient());

final authProvider = NotifierProvider<AuthNotifier, AsyncValue<void>>(() {
  return AuthNotifier();
});

class AuthNotifier extends Notifier<AsyncValue<void>> {
  @override
  AsyncValue<void> build() {
    return const AsyncData(null);
  }

  Future<void> login(String phone, String password) async {
    state = const AsyncLoading();
    try {
      final apiClient = ref.read(apiClientProvider);
      final response = await apiClient.dio.post(
        '/auth/login',
        data: {'phone': phone, 'password': password},
      );

      final token = response.data['access_token'];
      if (token != null) {
        final prefs = await SharedPreferences.getInstance();
        await prefs.setString('access_token', token);
        state = const AsyncData(null);
      } else {
        throw Exception('No token returned');
      }
    } catch (e, st) {
      state = AsyncError(e, st);
      // Don't rethrow, let the UI handle the error state if needed
      // or handle differently. For now, we update state.
      throw e;
    }
  }

  Future<void> logout() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('access_token');
    state = const AsyncData(null);
  }
}
